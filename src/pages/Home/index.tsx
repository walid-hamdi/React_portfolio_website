import { HStack } from "@chakra-ui/react";
import Links from "./components/Links";
import Header from "./components/Header";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <HStack flexDir="column">
      <Header />
      <HStack gap={3}>
        <Links />
        <Projects />
      </HStack>
    </HStack>
  );
};

export default Home;
