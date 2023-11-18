import { useTranslation } from "react-i18next";
import enFlag from "../assets/en_flag.png";
import huFlag from "../assets/hu_flag.png";
import { Box, Select } from "@chakra-ui/react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageOptions = [
    { value: "en", label: "English", flag: enFlag },
    { value: "hu", label: "Magyar", flag: huFlag },
    // Add more languages as needed
  ];

  return (
    <Box>
      <Select
        defaultValue={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languageOptions.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default LanguageSelector;
