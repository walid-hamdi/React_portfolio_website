import { Avatar, Box, Heading } from "@chakra-ui/react";

import profile from "../../../../assets/porfile.png";

const Header = () => {
  return (
    <>
      <Box py={5}>
        <Avatar size="2xl" name="Walid Hamdi" src={profile} />
      </Box>
      <Box pb={10} textAlign="center">
        <Heading size="lg" as="h2">
          Hey, I'm Walid
        </Heading>
        <Heading py={2} size="md" as="h4">
          React Developer.
        </Heading>
      </Box>
    </>
  );
};

export default Header;
