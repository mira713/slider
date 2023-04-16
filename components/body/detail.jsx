import React from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IoIosContact } from "react-icons/io";
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
import { BiMessage, BiShareAlt } from 'react-icons/bi'
import style from './body.module.css'

const Detail = ({ color = "rgb(236, 70, 70)", text = 'Sector 1' }) => {
  return (
    <Box mb='1rem' p='1%' boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}>
      <Flex gap={'1rem'}>
        <IoIosContact size="40" />
        <Heading as='h3' size='lg'>Lorem Ispum</Heading>
        <Box className={style.detailBtn} bgColor={color}>{text}</Box>
      </Flex>
      <Text mt={['0.255', '0.25', '0.5rem', '1rem']} lineHeight={'15px'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
      <Flex justifyContent={"space-around"} p="1.5rem">
        <Flex gap='2px'>
          <AiOutlineHeart size="25" />
          <Text>2k</Text>
        </Flex>
        <Flex gap='2px'>
          <AiOutlineEye size="25" />
          <Text>2k</Text>
        </Flex>
        <Flex gap='2px'>
          <BiMessage size="25" />
          <Text>2k comments</Text>
        </Flex>
        <Flex gap='2px'>
          <BiShareAlt size="25" />
          <Text>share</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Detail