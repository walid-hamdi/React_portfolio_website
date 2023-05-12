import { Container, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container textAlign="center" mt={{ base: 0, md: "-28" }}>
      <Text pb={2}>
        As an experienced React developer, I am confident in developing,
        debugging, and deploying high-quality web and mobile applications.
      </Text>
      <Text pb={2}>
        I possess a strong passion for front-end development and a deep
        commitment to mastering the React library.
      </Text>
      <Text>Here are some of the key skills I bring to the table:</Text>
    </Container>
  );
};

export default Header;
