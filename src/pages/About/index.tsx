import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Skills from "./components/Skills";

const About = () => {
  return (
    <Flex
      gap={5}
      mt={7}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <Skills />
    </Flex>
  );
};

export default About;
