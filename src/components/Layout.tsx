import { ReactNode } from "react";

import { Box, Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Flex
      h="100vh"
      w="100%"
      alignItems="center"
      flexDir="column"
      justifyContent="center"
    >
      <Navbar />
      <Box h="80vh">{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
