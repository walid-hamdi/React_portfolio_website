import { Container, Tag, TagLabel } from "@chakra-ui/react";

const Skills = () => {
  const skills = [
    {
      label: "React.js",
    },
    {
      label: "Front-end development",
    },
    {
      label: "Responsive design",
    },
    {
      label: "User interface (UI) design",
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
      label: "Git/GitHub",
    },
    {
      label: "CI/CD pipelines",
    },
  ];

  return (
    <Container textAlign="center">
      {skills.map((skill) => (
        <Tag colorScheme="yellow" size="md" m={1} key={skill.label}>
          <TagLabel>{skill.label}</TagLabel>
        </Tag>
      ))}
    </Container>
  );
};

export default Skills;
