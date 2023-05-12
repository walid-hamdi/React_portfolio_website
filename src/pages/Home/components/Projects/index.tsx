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
  const projects: {
    title: string;
    description: string;
    stack: string[];
    url: string;
    production?: boolean;
  }[] = [
    {
      title: "Game Hub",
      description: `Developed a Rawg clone using React hooks for state management, Chakra UI for styling, React Query for API data fetching and caching, and Zustand for global state management. Implemented features such as game search, sorting games by, getting games by platform, displaying genres, and game profile details.`,

      stack: ["React.js", "Chakra UI", "TypeScript", "Rawg API", "Zustand"],
      url: "https://game-hub-ivory-one.vercel.app/",
    },
    {
      // production: true,
      title: "Real time communication",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est, impedit? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Est, impedit? st, impedit?st, impedit?`,

      stack: [
        "React.js",
        "Node.js",
        "Material UI",
        "Express.js",
        "WebRTC",
        "Socket.io",
        "Mongodb",
        "Redux toolkit",
      ],
      url: "",
    },
    {
      title: "Workout",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est, impedit? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Est, impedit?`,

      stack: ["React.js", "Node.js", "Mongodb", "Express.js", "TailwindCSS"],
      url: "https://workout-frontend-1und.onrender.com/",
    },
    {
      title: "Blogpost",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est, impedit? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Est, impedit?`,

      stack: ["Angular", "Node.js", "Express.js", "Mongodb", "BootStrap"],
      url: "https://mean-blogpost.vercel.app/",
    },
  ];

  return (
    <>
      <Tooltip label="Projects">
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
      <Modal onClose={onClose} size="3xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Side projects</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(100%, 1fr))"
              sx={{
                "@media (min-width: 480px)": {
                  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                },
                "@media (min-width: 768px)": {
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                },
              }}
            >
              {projects.map((project) => (
                <Card
                  key={project.url}
                  variant="outline"
                  bgColor={project?.production ? "purple" : ""}
                >
                  <CardHeader>
                    <Heading size="md"> {project.title}</Heading>
                  </CardHeader>
                  <CardBody lineHeight={7}>
                    <Text mb={5}>{project.description}</Text>
                    <Flex gap={2} flexWrap="wrap">
                      {project.stack.map((item) => (
                        <Tag size="lg" key={item}>
                          <TagLabel>{item}</TagLabel>
                        </Tag>
                      ))}
                    </Flex>
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.url, "_blank")}
                    >
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
