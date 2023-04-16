import React from "react";
import {
    Box,
    Grid,
    GridItem,
    Text,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Image,
    Hide,
    useDisclosure,
    Show,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import style from "./body.module.css";
import Detail from "./detail";
import Drawers from './drawer';
import { Link } from 'react-scroll'
import {FiPlus} from "react-icons/fi"

const Body = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

    return (
        <Box>
            <Box p="1%">
                <Show breakpoint="(max-width: 700px)">
                    <Flex justifyContent={'space-around'} bg={'blue.700'} p="1%" color="white" w="100%" textAlign={'center'}>
                        <Link spy={true} to="forum" smooth={true} activeClass="activeClass" w="50%" borderRight={'1px solid white'}>
                            <Box>DISSCUSSION FORUM</Box>
                        </Link>
                        <Link spy={true} to="stories" smooth={true} w="50%">
                            <Box> MARKET STORIES</Box>
                        </Link>
                    </Flex>
                </Show>
                <Grid h="auto" gap={4} className={style.grids}>
                    <GridItem>
                        <Box position="fixed">
                            <Drawers isOpen={isOpen} onClose={onClose} onOpen={onOpen} placement={placement}/>
                        </Box>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} ml={isOpen? "50%" : "0px"} w="100%">
                        <Hide breakpoint="(max-width: 700px)">
                            <Text color={"red"} fontSize={"2xl"}>
                                DISSCUSSION FORUM
                            </Text>
                        </Hide>
                        <Box p="3%" id="forum">
                            <Text fontSize={"lg"} fontWeight={"bold"}>
                                Filter
                            </Text>
                            <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="2%" w="100%">
                                <Flex gap={["3", "8", "13", "18"]}>
                                    <Box className={style.btn}>Score 1</Box>
                                    <Box className={style.btn}>Score 2</Box>
                                    <Box className={style.btn}>Score 3</Box>
                                    <InputGroup>
                                        <Input borderRadius={"50px"} border={"1px solid black"} />
                                        <InputLeftElement width="5rem">
                                            <SearchIcon />
                                        </InputLeftElement>
                                    </InputGroup>
                                </Flex>
                            </Box>
                            <Box className={style.details} p="2%">
                                <Box mt="2rem" borderTop={'1px solid grey'} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                                    <Image
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyz3g1r7KumAY5WLu94PcmjneODMeyPO2Kg&usqp=CAU"
                                        w="100%" h="100%"
                                    />
                                </Box>
                                <Detail color="rgb(236, 70, 70)" text="Sector 1" />
                                <Detail color="blue" text="Sector 2" />
                                <Detail color="yellow" text="Sector 3" />
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem className={style.item} ml={isOpen? "50%" : "0px"}>
                        <Hide breakpoint="(max-width: 700px)">
                            <Text color={"red"} fontSize={"2xl"}>
                                MARKET STORIES
                            </Text>
                        </Hide>
                        <Box p="5%">
                            <Grid
                                h="200px"
                                gap={4}
                                className={isOpen?style.drawerImgs:style.imgs}

                            >
                                <GridItem className={style.bgGrid} >
                                    <Box className={style.tst}>
                                        <Text>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem className={style.bgGrid} id="stories">
                                    <Box className={style.tst}>
                                        <Text>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem className={style.bgGrid}>
                                    <Box className={style.tst}>
                                        <Text>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem className={style.bgGrid}>
                                    <Box className={style.tst}>
                                        <Text>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem className={style.bgGrid} >
                                    <Box className={style.tst}>
                                        <Text>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem className={style.bgGrid}>
                                    <Box className={style.tst}>
                                        <Text>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting.
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            <Box position="fixed" right="5%" bottom="5%" bg="red.700" color="white" borderRadius={'50%'} p="2vh">
               <FiPlus size="30"/>
            </Box>
        </Box>
    );
};

export default Body;
