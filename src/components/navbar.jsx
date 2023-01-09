import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Box,
  IconButton,
  VStack,
  useDisclosure,
  Image,
  Stack,
  Popover,
  PopoverTrigger,
  Text,
  Collapse,
  Link,
} from "@chakra-ui/react";
// import { Link } from "gatsby";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/images/logo.png";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Menu",
    href: "#menu",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Review",
    href: "#review",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600}>{label}</Text>
      </Flex>
    </Stack>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                _hover={{ color: "#fa6807" }}
                py={6}
                px={7}
                fontWeight={"bold"}
                bg="transparent"
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <chakra.header
      bgColor={"transparent"}
      w="full"
      px={{
        base: 2,
        sm: 4,
        lg: 10,
      }}
      py={4}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a
            href="/"
            title="Home Page"
            display="flex"
            alignItems="center"
          >
            <Image src={Logo} maxW="120px" />
          </chakra.a>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <DesktopNav />
          </HStack>
          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <AiFillCloseCircle w={3} h={3} />
                ) : (
                  <GiHamburgerMenu w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={"transparent"}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <Collapse in={isOpen} animateOpacity>
                <MobileNav />
              </Collapse>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
