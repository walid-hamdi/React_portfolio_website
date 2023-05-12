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
      minH="100vh"
      w="100%"
      alignItems="center"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box my={10}>
        <Navbar />
      </Box>
      <Box my={6}>{children}</Box>
      <Box my={6}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
