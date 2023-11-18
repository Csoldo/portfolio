import { Box } from "@chakra-ui/react";

interface Props {
  key: string;
  value: string;
  label: string;
  flag: string;
}

const LanguageSelectOption = ({ key, value, label, flag }: Props) => {
  return (
    <option key={key} value={value}>
      <Box display="flex" alignItems="center">
        {label} <img src={flag} />
      </Box>
    </option>
  );
};

export default LanguageSelectOption;
