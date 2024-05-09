import { Box, Container, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { profilePic } from '../assets';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HStack>
        <Container>
          <Box p={4}>
            <Box mt={8}>
              <Heading as="h2" size="2xl">
                {t('greeting')}
              </Heading>
              <Text>{t('greetingText')}</Text>
            </Box>

            <Box mt={8}>
              <Heading as="h3" size="lg" color={'red'}>
                {t('past')}
              </Heading>
              <Text>{t('pastText')}</Text>
            </Box>

            <Box mt={8}>
              <Heading as="h3" size="lg" color={'orange'}>
                {t('present')}
              </Heading>
              <Text>{t('presentText')}</Text>
            </Box>

            <Box mt={8}>
              <Heading as="h3" size="lg" color={'green'}>
                {t('future')}
              </Heading>
              <Text>{t('futureText')}</Text>
            </Box>
          </Box>
        </Container>
        <Container>
          <Image src={profilePic} borderRadius={20} />
        </Container>
      </HStack>
    </>
  );
};

export default HomePage;
