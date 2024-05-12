import { VStack, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <VStack align="center" spacing={4}>
      <Heading as="h1" size="xl" padding={4}>
        Boldizsár Nagy
      </Heading>
      <Text fontSize="lg">
        {t('headerText')}
      </Text>
    </VStack>
  );
};

export default Header;
