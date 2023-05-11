import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { SiCreatereactapp } from "react-icons/si";

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
            onClick={() => onOpen()}
            aria-label="Projects"
            size="sm"
            icon={<SiCreatereactapp />}
          />
        </Box>
      </Tooltip>
      <Modal onClose={onClose} size="2xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Projects</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {projects.map((project) => (
                <Card bgColor="red" key={project.url}>
                  <CardHeader>
                    <Heading size="md"> {project.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    {project.stack.map((item) => (
                      <Tag
                        size="md"
                        margin={1}
                        key={item}
                        // variant="subtle"
                        // colorScheme="cyan"
                      >
                        <TagLabel>{item}</TagLabel>
                      </Tag>
                    ))}
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
