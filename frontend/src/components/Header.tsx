import { VStack, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <VStack align="center" spacing={4}>
      <Heading as="h1" size="xl">
        Boldizsár Nagy
      </Heading>
      <Text fontSize="lg">
        Computer Science 3rd Year Student | Software Developer
      </Text>
    </VStack>
  );
};

export default Header;
