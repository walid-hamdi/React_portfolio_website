import { Container, Tag, TagLabel } from "@chakra-ui/react";

const Skills = () => {
  const skills = [
    {
      label: "Dart",
    },
    {
      label: "Flutter",
    },
    {
      label: "Design Patterns",
    },

    {
      label: "REST APIs Integration",
    },

    {
      label: "Debugging and Troubleshooting",
    },
    {
      label: "Unit, Widget and Integration Testing",
    },
    {
      label: "CI/CD Pipelines",
    },
  ];

  return (
    <Container textAlign="center" mt={4}>
      {skills.map((skill) => (
        <Tag colorScheme="yellow" size="md" m={1} key={skill.label}>
          <TagLabel>{skill.label}</TagLabel>
        </Tag>
      ))}
    </Container>
  );
};

export default Skills;
