import { Avatar, Box, Heading } from "@chakra-ui/react";

import profile from "../../../../assets/profile.jpg";

const Header = () => {
  return (
    <>
      <Box textAlign="center" py={5}>
        <Avatar size="2xl" name="Walid Hamdi" src={profile} />
        <Box pt={3} pb={10}>
          <Heading size="lg" as="h2">
            Hey, I'm Walid
          </Heading>
          <Heading py={2} size="md" as="h4">
            Flutter Developer.
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default Header;
