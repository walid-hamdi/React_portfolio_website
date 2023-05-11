import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const projects = [
    {
      title: "Game Hub",
      stack: ["React.js", "React Router", "Hooks"],
      url: "https://game-hub-ivory-one.vercel.app/",
    },
    {
      title: "Workout",
      stack: ["React.js", "Node.js", "Mongodb", "Express.js"],
      url: "https://workout-frontend-1und.onrender.com/",
    },
    {
      title: "Blogpost",
      stack: ["Angular", "Node.js"],
      url: "https://mean-blogpost.vercel.app/",
    },
    {
      title: "Discord",
      stack: ["React.js", "Node.js", "Material UI"],
      url: "",
    },
  ];

  return (
    <>
      <Tooltip label="React Projects">
        <Box>
          <IconButton
            colorScheme="yellow"
            variant="outline"
            onClick={() => onOpen()}
            aria-label="Projects"
            size="sm"
            icon={<BsCodeSlash size={15} />}
          />
        </Box>
      </Tooltip>
      <Modal onClose={onClose} size="full" isOpen={isOpen} colorScheme="red">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Projects</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
              {projects.map((project) => (
                <Card key={project.url}>
                  <CardHeader>
                    <Heading size="md"> {project.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text mb={2}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, impedit? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Est, impedit?
                    </Text>
                    <Flex gap={2} flexWrap="wrap">
                      {project.stack.map((item) => (
                        <Tag size="md" key={item}>
                          <TagLabel>{item}</TagLabel>
                        </Tag>
                      ))}
                    </Flex>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={() => window.open(project.url, "_blank")}>
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Projects;
