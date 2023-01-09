import {
  Container,
  chakra,
  Stack,
  SimpleGrid,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import React from "react";

export default function CallToAction() {
  return (
    <Container maxW={{ lg: "6xl", md: "5xl", sm: "5xl" }} my={20} id="contact">
      <SimpleGrid columns={{ lg: 2, sm: 1 }} spacing={20}>
        <Stack>
          <chakra.h1
            fontFamily="Abril Fatface"
            fontSize={{ lg: "5xl", md: "4xl", sm: "3xl" }}
            color="black"
            lineHeight={{ lg: "50px", sm: "30px"}}
          >
            Subscribe our{" "}
            <chakra.span  display={{ lg: "block", sm: "inline"}}> newsletter</chakra.span>
          </chakra.h1>
          <chakra.p
            fontSize="16px"
            color="gray.500"
            fontWeight={"semibold"}
            letterSpacing="tight"
          >
            Browse local restaurants and businesses for delivery by
            <chakra.span display={"block"}>
              {" "}
              entering your address below.
            </chakra.span>
          </chakra.p>
          <InputGroup maxW={{ lg: "400px", sm: "350px", base: "300px"}} my={10}>
            <Input type={"email"} placeholder="Enter your email address" />
            <InputRightElement>
              <Button
                px={10}
                _hover={{ bgColor: "#fa6807" }}
                color={"white"}
                bgColor={"#ff500f"}
              >
                Discover <IoIosArrowDroprightCircle color="white"/>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
        <Stack
          fontSize={{ lg: "4xl", md: "3xl", sm: "3xl" }}
          color="black"
          lineHeight={{ lg: "40px", sm: "20px"}}
          alignSelf="center"
        >
          <chakra.h3 fontFamily="Abril Fatface">
            Ready to <chakra.span display={{ lg: "block", sm: "inline"}}>order?</chakra.span>
          </chakra.h3>
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
      </SimpleGrid>
    </Container>
  );
}
