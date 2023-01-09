import {
  Container,
  chakra,
  Stack,
  SimpleGrid,
  VStack,
  Text,
  Button,
  HStack,
  Box,
  Image,
} from "@chakra-ui/react";
import React from "react";
import OfferBanner from "../assets/images/special.png"
import Burger from "../assets/images/burgar_1.png"
import Salad from "../assets/images/spicy_salad.png"
import Pizza from "../assets/images/sosy_pizza.png"

export default function SpecialOffer() {
  return (
    <Container maxW={"7xl"} p={10}>
      <Stack textAlign={"center"}>
        <chakra.p
          fontSize="16px"
          color="gray.500"
          fontWeight={"semibold"}
          letterSpacing="tight"
        >
          Our Offer
        </chakra.p>
        <chakra.h1
          fontFamily="Abril Fatface"
          fontSize={{ lg: "5xl", md: "4xl", sm: "3xl" }}
          color="black"
        >
          Get The Best Offer
        </chakra.h1>
        <chakra.p
          mb={4}
          fontSize="16px"
          color="gray.500"
          fontWeight={"semibold"}
          letterSpacing="tight"
        >
          Eat the your dream food at affordable prices. No need
          <chakra.span display={"block"}>
            {" "}
            to come to us just call it.
          </chakra.span>
        </chakra.p>
      </Stack>
      <SimpleGrid columns={{ lg: 2, sm: 1 }} spacing={10} my={10}>
        <Stack>
          <VStack position={"absolute"}>
            <Image
              src={OfferBanner}
              />
          </VStack>
          <Stack
            color={"white"}
            fontWeight="semibold"
            position="relative"
            py={{ lg: 20, sm: 10, base: 5}}
            px={{ lg: 10, base: 5}}
            pb={{ sm: 28, base: 0}}
          >
            <chakra.h4 fontSize={"22px"}>Lunch Time</chakra.h4>
            <chakra.span display={"block"} fontSize={{ lg: "6xl", md: "5xl", sm: "4xl", base: "2xl"}}>
              20% OFF
            </chakra.span>
            <Text>
              Avail{" "}
              <chakra.span color={"#ff500f"} fontWeight="bold">
                {" "}
                Pizza Pizza{" "}
              </chakra.span>
              Everyday Value Offers and get 2 Regular Pizzas starting at Rs.99
              each or get 2 Medium Pizzas starting at Rs.199 each.{" "}
            </Text>
            <Button
              maxW={"100px"}
              _hover={{ bgColor: "#fa6807" }}
              px={10}
              color={"white"}
              bgColor={"#ff500f"}
            >
              Order Now
            </Button>
          </Stack>
        </Stack>
        <Stack>
          <HStack>
            <Box maxW={"300px"}>
              <Image src={Burger} />
            </Box>
            <Stack px={5}>
              <chakra.h2 fontFamily={"Abril Fatface"} fontSize={"2xl"}>
                Spicy Burger ------------------- $4.00
              </chakra.h2>
              <chakra.p fontSize={"14px"} color="gray.500">
                These burgers are chock full of spicy peppers. When handling the
                chile peppers be sure to wear gloves, and don't let the pepper
                oils come in contact with your eyes. Serve on buns with your
                favorite toppings.
              </chakra.p>
            </Stack>
          </HStack>
          <HStack my={5}>
            <Box maxW={"150px"}>
              <Image src={Salad} />
            </Box>
            <Stack px={5}>
              <chakra.h2 fontFamily={"Abril Fatface"} fontSize={"2xl"}>
                Spicy Salad --------------------- $4.00
              </chakra.h2>
              <chakra.p fontSize={"14px"} color="gray.500">
                This is our absolute favorite easy cucumber salad, full of spice
                and flavor that hits all the salty, sweet, sour and spicy notes.
                You’ll be hooked with the first bite!
              </chakra.p>
            </Stack>
          </HStack>
          <HStack my={5}>
            <Box maxW={"150px"}>
              <Image src={Pizza} />
            </Box>
            <Stack px={5}>
              <chakra.h2 fontFamily={"Abril Fatface"} fontSize={"2xl"}>
                Sosy Pizza ---------------------- $4.00
              </chakra.h2>
              <chakra.p fontSize={"14px"} color="gray.500">
                We offer a wide range of food (pizza, dumplings, salads) and an
                impressive choice of beverages. Open 7 days per week.
              </chakra.p>
            </Stack>
          </HStack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
