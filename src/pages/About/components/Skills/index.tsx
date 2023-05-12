import {  Container, Tag, TagLabel } from "@chakra-ui/react";

const Skills = () => {
  const skills = [
    {
      label: "React",
    },
    {
      label: "React Native",
    },

    {
      label: "REST APIs",
    },

    {
      label: "Debugging and troubleshooting",
    },
    {
      label: "Unit, integration, and end-to-end testing",
    },
    {
      label: "CI/CD pipelines",
    },
  ];

  return (
    <Container  textAlign="center" mt={4}>
      {skills.map((skill) => (
        <Tag colorScheme="yellow" size="md" m={1} key={skill.label}>
          <TagLabel>{skill.label}</TagLabel>
        </Tag>
      ))}
    </Container>
  );
};

export default Skills;
