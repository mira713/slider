import React from "react";
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Box,
  Flex,
  Image, Text
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import style from "./navbar.module.css";
import { IoIosContact } from "react-icons/io";
import { Show, Hide } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      {/* ----------------------------- logo , searchBar and contact bar -------------------------*/}


      <Flex className={style.nav} justify={"space-between"} p={"1%"}>
        <Box>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnQgl98ySaJ0L54JcDWt82hMIZyW40IJ9kAd0SB73TA&s"
            alt="logo"
            height={[50, 80, 90, 100]}
            width={[50, 80, 90, 100]}
          />
        </Box>
        <Box className={style.input}>
          <InputGroup className={style.group}>
            <Input />
            <InputRightElement width="5rem">
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Hide breakpoint="(max-width: 700px)">
          <Flex justify={"space-between"} gap={"1rem"} className={style.contact}>
            <Button>contact us</Button>
            <Button className={style.border}>Sign Up</Button>
            <Button className={style.border}>Sign In</Button>
          </Flex>
        </Hide>
        <Show breakpoint="(max-width: 700px)">
          <Flex className={style.contact}>
            <IoIosContact size="40" />
          </Flex>
        </Show>
      </Flex>

      {/* ------------------------------------------- menu bar -------------------------------------*/}
      <Box>
        <Flex justify={"space-between"} background={'black'} color="white" gap="1rem">
          <Text>lorem</Text>
          <Text>spa</Text>
          <Text>marq</Text>
          <Text>lorem</Text>
          <Text>spark</Text>
          <Text>marqe</Text>
          <Text>lorem</Text>
          <Text>spak</Text>
          <Text>marq</Text>
          <Text>dizit</Text>
          <Text>tiall</Text>
          <Text>spak</Text>
          <Text>marq</Text>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
