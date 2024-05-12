import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box p={4}>
      <Box mt={8}>
        <Text fontSize="xl">About Me</Text>
        <Text>{t('aboutMeText')}</Text>
      </Box>

      <Box mt={8}>
        <Text fontSize="xl">Title</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          nisl euismod felis hendrerit, at posuere turpis tincidunt.
        </Text>
      </Box>

      <Box mt={8}>
        <Text fontSize="xl">Title</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          nisl euismod felis hendrerit, at posuere turpis tincidunt.
        </Text>
      </Box>

      <Box mt={8}>
        <Text fontSize="xl">Title</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          nisl euismod felis hendrerit, at posuere turpis tincidunt.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
