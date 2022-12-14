    import {
            Box,
            Text,
            Image,
            Flex,
            Center
        } from "@chakra-ui/react";
    import { useState } from "react";
    import Axios from "axios";
    import { useEffect } from "react";
    import { getPreciseDistance } from 'geolib';
    import { DateRange } from "react-date-range";
    import { addDays } from 'date-fns';

    
    export default function HomeCard() {
        const [data, setData] = useState()
        const cord = {}
        const url = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=indonesia&rows=100&start=1&sort&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&refine.features=Require+Guest+Phone+Verification"

        cord.lat = localStorage.getItem("lat")
        cord.lng = localStorage.getItem("lng")

        const getdata = async () => {
            try {
                const res = await Axios.get(url);
                setData(res.data)
            } catch (err) {
            console.log(err);
            }
        }
        const [state, setState] = useState([
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }
        ]);

        var disabledDates = [
            new Date("2022-12-20"),
            new Date("2022-12-21"),
            new Date("2022-12-22"),
            new Date("2022-12-23"),
        ];


        console.log(state)

        useEffect(() => {
            getdata()
        }, [])
        
        return (
        <>
            <Center>
                <Flex flexWrap={"wrap"} justifyContent="center"  position="relative" bgColor="white" mt="3" >
                <DateRange
                    fixedHeight={true}
                    rangeColors={["#07AEAF"]}
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    minDate={addDays(new Date(), 0)}
                    maxDate={addDays(new Date(), 30)}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    // disabledDates={disabledDates}
                    showSelectionPreview={false}
                    />

                    {data?.records.map((item, index) => {
                    return (
                        <Box _hover={{ cursor: "pointer" }} w="230px" h="220px" m="6px" key={index} >
                        <Box borderRadius="13px" borderTopRadius="13px" overflow="hidden">
                            <Image objectFit="cover" src={item.fields.xl_picture_url} width="230px" height="150px" />
                        </Box>
        
                        <Box px="10px" h="90px">
                                <Text mt="2" fontWeight="bold" fontSize="sm" >
                                    {item.fields.city}, {item.fields.country}
                                </Text>
                                    <Text mr="5px" fontSize="sm">
                                        Berjarak {Math.ceil(getPreciseDistance({ latitude: cord.lat, longitude: cord.lng  },{ latitude: item.fields.geolocation[0], longitude: item.fields.geolocation[1] })/1000) + " km"}
                                    </Text>
                                <Text mr="5px" fontSize="sm" >
                                    <Text fontWeight="bold" display="inline" >${item.fields.price}</Text> / night
                                </Text>
                        </Box>
                        </Box>
                    );
                    })}
                </Flex>
            </Center>
        </>
        );
    }
    