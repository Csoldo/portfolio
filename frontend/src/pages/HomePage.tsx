import { Container, HStack, Heading, Image, Text } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <HStack padding="10px">
      <Container>
        <Heading>Hi, I am Boldi.</Heading>
        <Text>
          I am a third year Computer Science student at the University of
          Groningen.
        </Text>
      </Container>
      <Container>
        <Image src="src/assets/boldizsar-nagy.jpg" borderRadius={20} />
      </Container>
    </HStack>
  );
};

export default HomePage;
