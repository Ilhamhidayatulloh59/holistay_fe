import React from "react";
import {
Box,
Center,
Text,
Flex,
Avatar,
} from "@chakra-ui/react";

export default function Menu() {
const cards = [
    ["https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/semua_produk.png", "Desaign Keren"],
    ["https://s3.ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/produk-baru.png", "Populer"],
    ["https://s3.ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/serba-promo.png", "Bed & Breakfast"],
    ["https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/sayuran-semua_not-selected.png", "Tropis"],
    ["https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/buah-semua_not-selected.png", "Pemandangan"],
    ["https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/daging-semua_not-selected.png", "Liburan"],
    ["https://s3.ap-southeast-1.amazonaws.com/assets.segari.id/categories/unggas-semua.png", "Pedesaan"],
    ["https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/seafood-semua_not-selected.png", "Kastel"],
    ["https://s3.ap-southeast-1.amazonaws.com/assets.segari.id/categories/v4/Icons_Pack-FMCG_Protein.png", "Hadap Pantai"],
    ["https://s3.ap-southeast-1.amazonaws.com/assets.segari.id/categories/v3/icon_lainnya.png", "Lainnya"],
];

return (
    <Center>
    <Flex flexWrap={"wrap"} mt="7" mb="3" w={[450, 450, 450]} justifyContent="space-evenly">
        {cards.map((item, index) => {
            return (
                <>
                <Box key={index} align="center" _hover={{ cursor: "pointer" }} >
                        <Avatar
                            border="1px"
                            bgColor="#07AEAF"
                            _hover={{ border: "2px"  }}
                            mr={[3, 4, 5]} ml={[3, 4, 5]} mt="2"
                            size="md"
                            name="saya"
                            src={item[0]}
                            />
                    <Text fontSize="x-small">{item[1]}</Text>
                </Box>
                </>
            )
        })}
    </Flex>
    </Center>
);
}
