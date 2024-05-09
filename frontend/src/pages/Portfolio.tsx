import React from 'react';
import { Box, Text, Heading, List, ListItem, Divider } from '@chakra-ui/react';

type Experience = {
  period: string;
  company: string;
  role: string;
  description?: string;
  skills?: string[];
};

type Project = {
  title: string;
  description: string;
};

const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({
  experiences,
}) => {
  return (
    <Box mt={8}>
      <Heading as="h2" size="xl" mb={4}>
        Professional Working Experience
      </Heading>
      <List spacing={5}>
        {experiences.map((experience, index) => (
          <ListItem key={index}>
            <Text fontWeight="bold" fontSize={24}>
              {experience.period}
            </Text>
            <Text fontWeight={'semibold'} fontSize={20}>
              {experience.company}
            </Text>
            <Text>{experience.role}</Text>
            <Text>{experience.description}</Text>
            {/* <Text fontWeight="bold">Skills:</Text> */}
            <Text fontSize={18}>{experience.skills?.join(', ')}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Box mt={8}>
      <Heading as="h2" size="xl" mb={4}>
        Hobby Projects
      </Heading>
      <List spacing={5}>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <Text fontWeight="bold">{project.title}</Text>
            <Text>{project.description}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// Main Portfolio Component
const Portfolio: React.FC = () => {
  const experiences: Experience[] = [
    {
      period: '2021 Dec - 2022 Dec',
      company: 'Smeedijzer internet',
      role: 'Frontend developer',
      description: 'Design and developed websites in wordpress.',
      skills: ['HTML', 'CSS', 'PHP', 'WordPress', 'Website deployment'],
    },
    {
      period: '2023 Feb - Present days',
      company: 'Syntho',
      role: 'Backend Developer',
      description:
        'Develop, maintain and test software applications for the company. Mostly focusing on database connectors.',
      skills: [
        'Python',
        'SQL',
        'Software design',
        'Testing',
        'Database Management',
        'TDD',
        'MySQL',
        'PostgreSQL',
        'Microsoft SQL Server',
        'Oracle Database',
        'Databricks',
        'Hive',
        'Sybase',
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: 'Genetic algorithm',
      description:
        'A program that guesses an input string using genetic algorithm, mutations and breeding.',
    },
    {
      title: 'Project B',
      description: 'An experimental project exploring ABC.',
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
