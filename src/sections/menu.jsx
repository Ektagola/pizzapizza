import {
  Container,
  SimpleGrid,
  chakra,
  Stack,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Pizza from "../assets/images/pizza.png";
import Health from "../assets/images/salad1.png";
import Burgar from "../assets/images/burgar.png";
import { motion } from "framer-motion";

export default function Menu() {
  const MotionChakra = motion(chakra.h1);
  return (
    <Container id="menu" maxW={{ lg: "6xl", sm: "4xl", base: "4xl" }} my={20}>
      <Stack textAlign={"center"}>
        <chakra.p
          fontSize="16px"
          color="gray.500"
          fontWeight={"semibold"}
          letterSpacing="tight"
        >
          Quality Food👌
        </chakra.p>
        <MotionChakra
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          initial={{ y: 100 }}
          animate={{ y: 10 }}
          fontFamily="Abril Fatface"
          fontSize={{ lg: "5xl", md: "4xl", sm: "3xl" }}
          color="black"
        >
          Our Popular Menu
        </MotionChakra>
        <chakra.p
          mb={4}
          fontSize="16px"
          color="gray.500"
          fontWeight={"semibold"}
          letterSpacing="tight"
        >
          The food at your doorstep. Why starve when you have us. Your hunger
          <chakra.span display={"block"}>
            {" "}
            partner. Straight out of the own to your doorstep.
          </chakra.span>
        </chakra.p>
      </Stack>
      <SimpleGrid
        spacing={10}
        columns={{ lg: 3, md: 3, sm: 1, base: 1 }}
        my={10}
      >
        <Stack
          bgColor={"#FFDCD0"}
          p={10}
          alignItems={"center"}
          mx={{ lg: 0, md: 0, sm: "60px", base: 0 }}
        >
          <Box bgColor="#ff500f" rounded={"full"}>
            <chakra.span p={5}>
              <Image src={Burgar} maxW={{ sm: "200px" }} />
            </chakra.span>
          </Box>
          <chakra.p
            color="#ff500f"
            fontSize={{ lg: "18px", sm: "16px", base: "14px" }}
            fontWeight="bold"
            pt={5}
          >
            Pure Veg Burger
          </chakra.p>
          <chakra.p
            fontFamily={"Abril Fatface"}
            fontSize={{ lg: "24px", sm: "20px", base: "18px" }}
          >
            Every Day Offer
          </chakra.p>
          <chakra.p
            fontFamily={"Abril Fatface"}
            fontSize={{ lg: "24px", sm: "20px", base: "18px" }}
            pb={5}
          >
            Customizing As You Want With Free Of Cost
          </chakra.p>
          <Button
            _hover={{ bgColor: "#fa6807" }}
            py={6}
            px={10}
            fontWeight={"bold"}
            bgColor={"#ff500f"}
            color={"white"}
          >
            Add to Cart $5.60
          </Button>
        </Stack>
        <Stack
          bgColor={"#FFDCD0"}
          p={10}
          alignItems={"center"}
          mx={{ lg: 0, md: 0, sm: "60px", base: 0 }}
        >
          <Box bgColor="#ff500f" rounded={"full"}>
            <chakra.span p={5}>
              <Image src={Health} maxW={{ sm: "200px" }} />
            </chakra.span>
          </Box>
          <chakra.p
            color="#ff500f"
            fontSize={{ lg: "18px", sm: "16px", base: "14px" }}
            fontWeight="bold"
            pt={5}
          >
            Pure Veg Salad
          </chakra.p>
          <chakra.p
            fontFamily={"Abril Fatface"}
            fontSize={{ lg: "24px", sm: "20px", base: "18px" }}
            pb={5}
          >
            All Flavour Available As You Want
          </chakra.p>
          <Button
            _hover={{ bgColor: "#fa6807" }}
            py={6}
            px={10}
            fontWeight={"bold"}
            bgColor={"#ff500f"}
            color={"white"}
          >
            Add to Cart $10
          </Button>
        </Stack>
        <Stack
          bgColor={"#FFDCD0"}
          p={10}
          alignItems={"center"}
          mx={{ lg: 0, md: 0, sm: "60px", base: 0 }}
        >
          <Box bgColor="#ff500f" rounded={"full"} maxW="3xl">
            <chakra.span p={5}>
              <Image src={Pizza} maxW={{ sm: "200px" }} />
            </chakra.span>
          </Box>
          <chakra.p
            color="#ff500f"
            fontSize={{ lg: "18px", sm: "16px", base: "14px" }}
            fontWeight="bold"
            pt={5}
          >
            Pure Veg Pizza's
          </chakra.p>
          <chakra.p
            fontFamily={"Abril Fatface"}
            fontSize={{ lg: "24px", sm: "20px", base: "18px" }}
            pb={5}
          >
            Whole Wheat Pizza With Special Toppings
          </chakra.p>
          <Button
            _hover={{ bgColor: "#fa6807" }}
            py={6}
            px={10}
            fontWeight={"bold"}
            bgColor={"#ff500f"}
            color={"white"}
          >
            Add to Cart $5.60
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
