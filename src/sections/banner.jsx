import React from "react";
import {
  SimpleGrid,
  Flex,
  chakra,
  Box,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import BannerImage from "../assets/images/banner.jpg";
import Customers from "../assets/images/customer.png";
import { motion } from "framer-motion";

export default function Banner() {
  const MotionChakra = motion(chakra.h1);
  return (
    <SimpleGrid
      id="home"
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}
      _after={{
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{
          base: 4,
          lg: 10,
        }}
        py={{ lg: 24, base: 10 }}
      >
        <MotionChakra
          mb={6}
          fontSize={{
            base: "4xl",
            md: "6xl",
            lg: "7xl",
          }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          initial={{ y: 100 }}
          animate={{ y: 10 }}
          fontWeight="semibold"
          fontFamily={"Abril Fatface"}
          lineHeight={{ lg: "70px", base: "45px" }}
        >
          <chakra.span color={"#ff500f"}>Good</chakra.span> Food
          <chakra.span display="block"> & Good</chakra.span>
          <chakra.span color={"#ff500f"}> Moments</chakra.span>
        </MotionChakra>

        <chakra.p
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          fontSize="16px"
          color="gray.500"
          fontWeight={"semibold"}
          letterSpacing="tight"
        >
          Eat the your food dream in the affordable prices. No need to come to
          us just call it. We are providing and delivering your yummy foods.
        </chakra.p>
        <Stack>
          <Button
            _hover={{ bgColor: "#fa6807" }}
            py={6}
            px={10}
            fontWeight={"bold"}
            bgColor={"#ff500f"}
            color={"white"}
          >
            View Menu
          </Button>
          <chakra.h4
            my={5}
            fontWeight={"bold"}
            fontSize={"20px"}
            color={"#ff500f"}
          >
            Our Happy Customers
          </chakra.h4>
          <Flex>
            <Image src={Customers} width={"120px"} />
            <chakra.p fontWeight={"bold"} my={2} fontSize="14px">
              + 12.5k Review
            </chakra.p>
          </Flex>
        </Stack>
      </Flex>
      <Box>
        <Image
          src={BannerImage}
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{
            base: 64,
            sm: "full",
            md: "90vh",
          }}
          bg="white"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
}
