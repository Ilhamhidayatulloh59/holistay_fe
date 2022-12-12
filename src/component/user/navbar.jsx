import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Avatar, Flex, Icon, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tag } from "@chakra-ui/react";
import logo from "../../img/Logo.png";


export default function Navtop() {

    return (
        <Flex w={[400, 450, 500]} bgColor="white" justifyContent="center" align="center" mt="1">
            <Image ml="5" src={logo} width="130px"  _hover={{ cursor: "pointer" }}  />
            <InputGroup ml="1">
                <InputLeftElement
                pointerEvents="fill"
                children={<SearchIcon color='#07AEAF' />}
                />
                <Input w={[150, 200, 250]} borderRadius="full" borderColor="#07AEAF" type="tel" placeholder='Mau kemana ?' _placeholder={{ opacity: 1, color: '#07AEAF' }}/>
            </InputGroup>
            <Menu>
            <MenuButton w="70px" mr="3" >
                <Tag bgColor="white" w="40" h="10"  borderRadius='full' border="1px" borderColor="gray.300" _hover={{ cursor: "pointer" }} >
                    <Icon as={HamburgerIcon} mr="2" ml="1" />
                    <Avatar
                        size="sm"
                        name="saya"
                        bgColor="#FE9900"
                        />
                </Tag>
            </MenuButton>
            <MenuList zIndex="3" >
                <MenuItem>New File</MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuDivider />
                <MenuItem>Open...</MenuItem>
                <MenuItem>Save File</MenuItem>
            </MenuList>
            </Menu>
        </Flex>
    );
};