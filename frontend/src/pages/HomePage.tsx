import { Container, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <HStack padding="10px">
      <Container>
        <Heading>{t("greeting")}</Heading>
        <Text>{t("homeText")}</Text>
      </Container>
      <Container>
        <Image src="src/assets/boldizsar-nagy.jpg" borderRadius={20} />
      </Container>
    </HStack>
  );
};

export default HomePage;
