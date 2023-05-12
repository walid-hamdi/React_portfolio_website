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
      p={3}
    >
      <Navbar />
      <Box my={6}>{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
