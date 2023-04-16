import React from "react";
import {
  Text,
  Hide,
  Image,
  Flex,
} from "@chakra-ui/react";
import style from "./body.module.css";

const Companies = () => {


  return (
    <div>
      <Hide breakpoint="(max-width: 700px)">
        <Text color={"red"} fontSize={"2xl"} p={"1%"}>
          FEATURED COMPANY
        </Text>
      </Hide>
      <Flex className={style.heading} gap={["1.5rem"]}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfvGBb0vh17agzs0qGdc-PQn7ooxEvduX8Q&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNedYcRf9XwAahtC0U1u_GiHMLAVKhKAxBg&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4H5Vw05VAfALRbGjqKfUGOHw61JCgJmuwQ&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIVWcVmJkSqRP6gPAnDkmQJ4pTBSA-qsy8A&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoK962yBEfmKTMcjWYaZ1qEKxm25VireZXcg&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQPo9yvJ2MxPyogXckx8qHdB1olBFtcMjGw&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xJWMR-LL5lt1fxIEODLW4gObmqodjqerwA&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvt7cVeq6JLRHg3B0GRh_BI4uG5Ds92pbV6Q&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGTQz1tL1QRpFP4TmyTgkXFL2Y87uHYraBQ&usqp=CAU"
          h={["30", "50", "70"]}
          w="70"
        />
      </Flex>
    </div>
  );
};

export default Companies;
