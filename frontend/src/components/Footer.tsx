import { Box, Text, HStack, IconButton, Link } from "@chakra-ui/react";
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
  return (
    <Box mt={8} padding={8}>
      <Text fontSize="xl" paddingY={6}>
        {t("contactInfo")}
      </Text>
      <HStack align="center" spacing={6} sx={{flexWrap: 'wrap'}}>
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
            href="Boldizsar_Nagy_CV_2023.pdf"
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
