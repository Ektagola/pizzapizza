import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/images/white_logo.png";
import { ImLocation } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontFamily="Abril Fatface" fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bgColor={"#ff500f"} color="white">
      <Container as={Stack} maxW={"6xl"} py={20}>
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 2, base: 1 }} spacing={{ lg: 20, sm: 5}}>
          <Stack spacing={6}>
            <Box>
              <Image src={Logo} width="120px" />
            </Box>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>
            <Link href={"#"} display="flex">
              <ImLocation size={"40px"} />
              35 W 46nd Street, Wall Road New York, USA
            </Link>
            <Link href={"#"} display="flex">
              <FiPhoneCall size={"25px"} />
              458-7800-458-7890
            </Link>
            <Link href={"#"} display="flex">
              <HiMail size={"30px"} />
              support@pizzapizza.com
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Shipping & Returns</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Our Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Info</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Our Stores</Link>
            <Link href={"#"}>Size Guide</Link>
            <Link href={"#"}>Our Pricing Service</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
