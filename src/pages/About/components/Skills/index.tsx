import { HStack, Tag, TagLabel } from "@chakra-ui/react";

const Skills = () => {
  const skills = [
    {
      label: "Develop",
    },
    {
      label: "Debug",
    },
    {
      label: "Deploy",
    },
  ];
  return (
    <HStack spacing={4}>
      {skills.map((skill) => (
        <Tag size="md" key={skill.label} variant="subtle" colorScheme="cyan">
          <TagLabel>{skill.label}</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
};

export default Skills;
