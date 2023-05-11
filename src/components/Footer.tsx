import { Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Text my={4} textAlign="center" fontSize="sm" color="subtle">
      &copy; {new Date().getFullYear()} Walid Hamdi. All rights reserved.
    </Text>
  );
};

export default Footer;
