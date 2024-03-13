import { useTranslation } from "react-i18next";
import enFlag from "../assets/en_flag.png";
import huFlag from "../assets/hu_flag.png";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageOptions = [
    { value: "en", label: "English", flag: enFlag },
    { value: "hu", label: "Magyar", flag: huFlag },
  ];

  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {i18n.language === "en" ? "English" : "Magyar"}
      </MenuButton>
      <MenuList p={0} minW="0" w={"140px"}>
        {languageOptions.map((lang) => (
          <MenuItem key={lang.value} onClick={() => changeLanguage(lang.value)}>
            <span>{lang.label}</span>
            <Image
              boxSize="2rem"
              src={lang.flag}
              alt={lang.label}
              ml="16px"
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
