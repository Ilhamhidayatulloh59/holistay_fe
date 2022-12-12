import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Menu from "../../component/user/menu";
import Navtop from "../../component/user/navbar";
import Navbot from "../../component/user/navbot";
import Promo from "../../component/user/promo";
import HomeCard from "../../component/user/view";

export default function HomePage() {
  return (
    <>
    <Box h="100%" bgColor="gray">
    <Center>
        <Box h="100vh" w={[400, 450, 500]} bgColor="white" >
            <Grid>
                <GridItem h="8vh" boxShadow='xl'>
                    <Navtop/>
                </GridItem>
                <GridItem h="85vh" overflow="scroll" sx={{ "::-webkit-scrollbar": { display: "none" }}} >
                    <Promo/>
                    <Menu/>
                    <HomeCard/>
                </GridItem>
                <GridItem h="7vh">
                    <Navbot/>
                </GridItem>
            </Grid>
        </Box>
    </Center>
        </Box>
    </>
  );
}
