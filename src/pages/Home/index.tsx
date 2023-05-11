import { HStack } from "@chakra-ui/react";
import Links from "./components/Links";
import Header from "./components/Header";

const Home = () => {
  return (
    <HStack flexDir="column">
      <Header />
      <Links />
    </HStack>
  );
};

export default Home;
