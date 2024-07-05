import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box p={4}>
      <Box mt={8}>
        <Text fontSize="xl">{t('aboutMe')}</Text>
        <Text mt={4}>{t('aboutMeTextFirst')}</Text>
        <Text mt={4}>{t('aboutMeTextSecond')}</Text>
        <Text mt={4}>{t('aboutMeTextThird')}</Text>
        <Text mt={4}>{t('aboutMeTextFourth')}</Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
