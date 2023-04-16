import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Button,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import style from "./body.module.css";
import { IoIosContact } from "react-icons/io";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Drawers = ({isOpen,onOpen,onClose,placement}) => {
 
  const drawerOpen = () => {
  onOpen()
  };
  return (
    <Box className={style.drawer}>
      <Button
        bgColor="blue.900"
        _hover={{ bgColor: "blue.900" }}
        color={"white"}
        onClick={() => drawerOpen()}
        p="2%"
        w="4.5%"
        borderRadius={"100%"}
        className={style.drawerBtn}
        position={"absolute"}
      >
        <MdOutlineDoubleArrow />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} id={style.drawerHt} position="absolute">
        <DrawerContent color="white" bg="blue.800" top="23%" position={'relative'}>
          <DrawerHeader borderBottomWidth="1px">
            <Flex>
              <IoIosContact size="30" />
              <Text>Hello, User</Text>
              <Box ml="40px">
                <BsFillBellFill size="25" />
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <h3>Market Stories</h3>
            <h3>Market Stories</h3>
            <h3>Market Stories</h3>
            <h3>Market Stories</h3>
            <h3>Market Stories</h3>
            <Box
              position={"absolute"}
              top="50%"
              left="90%"
              bg="blue.900"
              color="white"
              borderRadius={"50%"}
              p="3vh"
              onClick={onClose}
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Drawers;
