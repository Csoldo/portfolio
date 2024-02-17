import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AboutMe: React.FC = () => {
  return (
    <Box p={4}>
      <Box mt={8}>
        <Text fontSize="xl">About Me</Text>
        <Text>
          I am a passionate software developer currently pursuing a degree in
          Computer Science. My interest lies in both frontend and backend
          development, with a focus on creating efficient and scalable
          solutions.
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
