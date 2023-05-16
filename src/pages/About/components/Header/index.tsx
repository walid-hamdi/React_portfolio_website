import { Container, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container textAlign="center" mt={{ base: 0, md: "-28" }}>
      <Text pb={2}>
        I am a skilled Flutter developer with a passion for creating
        high-quality mobile applications.
      </Text>
      <Text pb={2}>
        My commitment to clean code, attention to detail, and ability to
        collaborate effectively make me a valuable asset in delivering
        successful projects.
      </Text>

      <Text>Here are some of the key skills I bring to the table:</Text>
    </Container>
  );
};

export default Header;
