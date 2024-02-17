import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio: React.FC = () => {
  return (
    <Box p={4}>
      <Box mt={8}>
        <Text fontSize="xl">Projects</Text>
        <VStack align="start" spacing={4}>
          <Box>
            <Heading as="h2" size="lg">
              Project 1
            </Heading>
            <Text>
              Description of Project 1. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam auctor nisl euismod felis hendrerit, at
              posuere turpis tincidunt.
            </Text>
            <HStack>
              <IconButton
                as={Link}
                href="https://github.com/project1-repo"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub />}
                isRound
              />
              <IconButton
                as={Link}
                href="https://project1-live-demo.com"
                target="_blank"
                aria-label="Live Demo"
                icon={<FaExternalLinkAlt />}
                isRound
              />
            </HStack>
          </Box>

          <Box>
            <Heading as="h2" size="lg">
              Project 2
            </Heading>
            <Text>
              Description of Project 2. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam auctor nisl euismod felis hendrerit, at
              posuere turpis tincidunt.
            </Text>
            <HStack>
              <IconButton
                as={Link}
                href="https://github.com/project2-repo"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub />}
                isRound
              />
              <IconButton
                as={Link}
                href="https://project2-live-demo.com"
                target="_blank"
                aria-label="Live Demo"
                icon={<FaExternalLinkAlt />}
                isRound
              />
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Portfolio;
