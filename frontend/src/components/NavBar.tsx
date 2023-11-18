import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSelector from "./LanguageSelector";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About</Link>
      <ColorModeSwitch />
      <LanguageSelector />
    </HStack>
  );
};

export default NavBar;
