import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Skills from "./components/Skills";

const About = () => {
  return (
    <Flex
      gap={10}
      flexDir="column"
      pt="60px"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <Skills />
    </Flex>
  );
};

export default About;
