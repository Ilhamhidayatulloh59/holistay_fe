    import React from "react";
    import {
    Box,
    IconButton,
    useBreakpointValue,
    Center,
    useColorModeValue,
    } from "@chakra-ui/react";
    // Here we have used react-icons package for the icons
    import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
    // And react-slick as our Carousel Lib
    import Slider from "react-slick";
    import { useState } from "react";

    // Settings for the slider
    const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    };

    export default function Promo() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "10px" });

    // These are the images used in the slide
    const cards = [
        "https://ik.imagekit.io/tvlk/image/imageResource/2022/11/25/1669342678109-3c19cac893b91f4991822aac748c71f9.jpeg?tr=q-75",
        "https://ik.imagekit.io/tvlk/image/imageResource/2022/11/24/1669300367096-b1fa124a7bd33fe588ebd759044c1ec2.png?tr=q-75",
        "https://ik.imagekit.io/tvlk/image/imageResource/2022/11/23/1669194683744-94ddd06916a27c6d6a2354fb31d1d18f.png?tr=q-75",
    ];

    return (
        <>
        <Center>
            <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            mt="5"
            position={"relative"}
            height="auto"
            w={[370, 420, 470]}
            justifyContent="center"
            >
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            <IconButton
                aria-label="left-arrow"
                colorScheme="teal"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                size="xs"
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt />
            </IconButton>

            <IconButton
                aria-label="right-arrow"
                colorScheme="teal"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                size="xs"
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt />
            </IconButton>

            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                <Box
                    key={index}
                    height="23vh"
                    borderRadius="2xl"
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${url})`}
                />
                ))}
            </Slider>
            </Box>
        </Center>
        </>
    );
    }
