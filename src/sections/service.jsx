import { Container, SimpleGrid, chakra, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { SiCodechef } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
import { motion } from "framer-motion";

export default function Service() {
  const MotionChakra = motion(chakra.h1);
  const data = [
    {
      icon: <SiCodechef />,
      head: "Best Chef",
      description:
        "Our chef is trained by professional cook and tradesman who is proficient in all aspects of preparation.",
    },
    {
      icon: <MdFoodBank />,
      head: "Fresh Food",
      description:
        "Fresh food is which has not been preserved and food not spalied for vegetables and fruits.",
    },
    {
      icon: <TbTruckDelivery />,
      head: "Fast Delivery",
      description:
        "Get fast food delivery, fast easy online ordering for takeout and delivery from fast food restaurants near by you. ",
    },
  ];
  return (
    <Container
      id="services"
      maxW={{ lg: "6xl", sm: "4xl", base: "4xl" }}
      my={10}
    >
      <Stack textAlign={"center"}>
        <chakra.p
          mb={4}
          fontSize="16px"
          color="gray.500"
          fontWeight={"semibold"}
          letterSpacing="tight"
        >
          Our Service
        </chakra.p>
        <MotionChakra
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          initial={{ y: 100 }}
          animate={{ y: 10 }}
          fontFamily="Abril Fatface"
          fontSize={{ lg: "5xl", md: "4xl", sm: "3xl" }}
          color="black"
        >
          Why Choose Us
        </MotionChakra>
        <chakra.p
          mb={4}
          fontSize="16px"
          color="gray.500"
          fontWeight={"semibold"}
          letterSpacing="tight"
        >
          Food service of catering industry defines those businesses,
          institutions, and
          <chakra.span display={"block"}>
            {" "}
            companies responsible for any meal prepared outside the home
          </chakra.span>
        </chakra.p>
      </Stack>
      <SimpleGrid spacing={10} columns={{ lg: 3, md: 3, sm: 1, base: 1 }}>
        {data.map((details) => (
          <Stack
            p={{ lg: 10, base: 5 }}
            textAlign={"center"}
            alignItems="center"
            borderRadius={"20px"}
            mt={{ lg: 10, base: 5 }}
            _hover={{
              transition: "0.2s",
              border: "2px",
              borderStyle: "solid",
              borderColor: "#ff500f",
            }}
          >
            <Box color="#ff500f" fontSize={"80px"}>
              {details.icon}
            </Box>
            <chakra.h3
              fontWeight={"bold"}
              fontFamily="Abril Fatface"
              fontSize={"2xl"}
            >
              {details.head}
            </chakra.h3>
            <chakra.p
              fontSize="16px"
              color="gray.500"
              fontWeight={"semibold"}
              letterSpacing="tight"
            >
              {details.description}
            </chakra.p>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}
