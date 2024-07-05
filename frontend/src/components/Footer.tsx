import {
  Box,
  Text,
  HStack,
  IconButton,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGitlab,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const alignItems = useBreakpointValue({ base: 'flex-start', md: 'center' });

  return (
    <Box mt={8} padding={8} w="100%">
      <Text fontSize="xl" paddingY={6}>
        {t("contactInfo")}
      </Text>
      <HStack as={stackDirection} align={alignItems} spacing={6} wrap="wrap">
        <HStack>
          <IconButton
            as={Link}
            href="https://github.com/Csoldo"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            isRound
          />
          <Text as="b">GitHub</Text>
        </HStack>

        <HStack>
          <IconButton
            as={Link}
            href="https://gitlab.com/Csoldo"
            target="_blank"
            aria-label="GitLab"
            icon={<FaGitlab />}
            isRound
          />
          <Text as="b">GitLab</Text>
        </HStack>
        <HStack>
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/boldizs%C3%A1r-nagy-491a22218"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            isRound
          />
          <Text as="b">LinkedIn</Text>
        </HStack>
        <HStack>
          <IconButton
            as={Link}
            href="mailto:boldi.nagy2000@gmail.com"
            aria-label="Email"
            icon={<FaEnvelope />}
            isRound
          />
          <Text as="b">boldi.nagy2000@gmail.com</Text>
        </HStack>
        <HStack>
          <IconButton
            as={Link}
            href="boldizsar_cv.pdf"
            aria-label="Download CV"
            icon={<FaArrowAltCircleDown />}
            isRound
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security reasons
          />
          <Text as="b">CV</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
