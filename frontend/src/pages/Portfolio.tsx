import React from "react";
import { Box, Text, Heading, List, ListItem, Divider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type Experience = {
  period: string;
  company: string;
  role: string;
  description?: string;
  skills?: string[];
  link?: string;
};

type Project = {
  title: string;
  description: string;
  link?: string;
};

const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({
  experiences,
}) => {
  const { t } = useTranslation();
  return (
    <Box mt={8}>
      <Heading as="h2" size="xl" mb={4}>
        {t("professionalWorkingExperience")}
      </Heading>
      <List spacing={5}>
        {experiences.map((experience, index) => (
          <ListItem key={index}>
            <Text fontWeight="bold" fontSize={26}>
              {t("experiencePeriod", {
                period: experience.period,
                company: experience.company,
              })}
            </Text>
            <Text fontWeight="semibold" fontSize={22}>
              {t("experienceRole", { role: experience.role })}
            </Text>
            <Text>{experience.description}</Text>
            <Text fontSize={14}>
              {t("skills")}: {experience.skills?.join(", ")}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const { t } = useTranslation();
  return (
    <Box mt={8}>
      <Heading as="h2" size="xl" mb={4}>
        {t("hobbyProjects")}
      </Heading>
      <List spacing={5}>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <Text fontWeight="bold" fontSize={22}>
              {project.title}
            </Text>
            <Text>{t(project.description)}</Text>
            {project.link && (
              <Text>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("sourceCode")}
                </a>
              </Text>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const experiences: Experience[] = [
    {
      period: t("period2021to2022"),
      company: "Smeedijzer internet",
      role: t("frontendDeveloper"),
      description: t("description1"),
      skills: ["HTML", "CSS", "PHP", "WordPress", "Website deployment"],
    },
    {
      period: t("period2023toPresent"),
      company: "Syntho",
      role: t("softwareDeveloper"),
      description: t("description2"),
      skills: [
        "Python",
        "SQL",
        "Software design",
        "Testing",
        "Database Management",
        "TDD",
        "MySQL",
        "PostgreSQL",
        "Microsoft SQL Server",
        "Oracle Database",
        "Databricks",
        "Hive",
        "Sybase",
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: "Genetic algorithm",
      description: t("descriptionGeneticAlgorithm"),
      link: "https://github.com/Csoldo/Genetic-Algorithm",
    },
  ];

  return (
    <Box p={4}>
      <ExperienceSection experiences={experiences} />
      <Divider my={8} />
      <ProjectsSection projects={projects} />
    </Box>
  );
};

export default Portfolio;
