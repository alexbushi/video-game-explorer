import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Text>NavBar</Text>
      <Image src={logo} boxSize="60px" alt="logo" />
    </HStack>
  );
};

export default NavBar;
