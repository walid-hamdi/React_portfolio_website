import { Box, Button, Heading, Link } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box mt={20} textAlign="center">
      <Heading as="h2" size="lg">
        Page Not Found
      </Heading>
      <Button mt={5}>
        <Link href="/">Back home</Link>
      </Button>
    </Box>
  );
};

export default NotFound;
