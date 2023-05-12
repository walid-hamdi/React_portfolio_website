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
      // padding={4}
      p={8}
    >
      <Navbar />
      <Box
      // // h="80vh"
      // minH="80vh"
      // w="100%"
      // display="flex"
      // paddingTop={10}
      // alignItems="flex-start"
      // justifyContent="center"
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
