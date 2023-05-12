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
      description: `Developed a Rawg clone using React hooks for state management, Chakra UI for styling, React Query for API data fetching and caching, and Zustand for global state management. Implemented features such as game search, sorting games by, getting games by platform, displaying genres, and game profile details.`,

      stack: ["React.js", "Chakra UI", "TypeScript", "Rawg API", "Zustand"],
      url: "https://game-hub-ivory-one.vercel.app/",
    },
    // {
    //   title: "Workout",
    //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //   Est, impedit? Lorem ipsum dolor sit amet consectetur
    //   adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
    //   consectetur adipisicing elit. Est, impedit?`,

    //   stack: ["React.js", "Node.js", "Mongodb", "Express.js", "TailwindCSS"],
    //   url: "https://workout-frontend-1und.onrender.com/",
    // },
    // {
    //   title: "Blogpost",
    //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //   Est, impedit? Lorem ipsum dolor sit amet consectetur
    //   adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
    //   consectetur adipisicing elit. Est, impedit?`,

    //   stack: ["Angular", "Node.js", "Express.js", "Mongodb", "BootStrap"],
    //   url: "https://mean-blogpost.vercel.app/",
    // },
    // {
    //   title: "Discord clone",
    //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //   Est, impedit? Lorem ipsum dolor sit amet consectetur
    //   adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
    //   consectetur adipisicing elit. Est, impedit?`,

    //   stack: [
    //     "React.js",
    //     "Node.js",
    //     "Material UI",
    //     "Express.js",
    //     "WebRTC",
    //     "Socket.io",
    //     "Mongodb",
    //     "Redux toolkit",
    //   ],
    //   url: "",
    // },
    {
      title: "Fin around",
      description: `Allows users to discover nearby coffee shops, restaurants, and other places of interest. Using location data, it provides real-time search results and interactive maps for a seamless user experience. The project is built using modern web technologies and follows best practices for performance and scalability.`,

      stack: ["Next.js", "Airtable", "Location", "CSS module"],
      url: "https://findaround.vercel.app/",
    },
    {
      title: "Netflix clone",
      description: `This Netflix clone built with Next.js features seamless video streaming, Magic authentication, and CSS modules for styling. Users can browse and search for movies and TV shows, create watchlists, and resume playback across devices. The app is optimized for performance and follows best practices for scalability, ensuring a smooth user experience.`,

      stack: ["Next.js", "Magic Auth", "YouTube API", "CSS Module"],
      url: "https://streamingvideos.vercel.app/",
    },
    {
      title: "The new tunisia",
      description: `Empower citizens with a web app integrating multiple sector communication systems, with a voice platform for opinions & insights using ML. Real-time data to decision-makers for a more informed, engaged and responsive society in Tunisia.`,

      stack: [
        "Next.js",
        "Context API",
        "Styled Components",
        "Peer.js",
        "Firebase",
      ],
      url: "https://thenewtunisia.vercel.app/",
    },
    // {
    //   title: "Movies rental",
    //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //   Est, impedit? Lorem ipsum dolor sit amet consectetur
    //   adipisicing elit. Est, impedit? Lorem ipsum dolor sit amet
    //   consectetur adipisicing elit. Est, impedit?`,

    //   stack: ["React.js", "Strapi", "Context API", "Sentry", "TailwindCSS"],
    //   url: "rental-movies.vercel.app/movies",
    // },
    {
      title: "Shopify e-commerce",
      description: `E-commerce platform! Designed specifically for Shopify stores, this platform seamlessly integrates with your existing store to deliver an enhanced shopping experience to your customers. Built with TailwindCSS, GraphQL, and the Context API, this platform is fast, modern, and user-friendly. With a clean and responsive design.`,

      stack: [
        "Next.js",
        "Context API",
        "Shopify API",
        "TailwindCSS",
        "GraphQL",
      ],
      url: "https://injestic.vercel.app/",
    },
    // {
    //   title: "Sell it",
    //   description: `E-commerce platform! Designed specifically for Shopify stores, this platform seamlessly integrates with your existing store to deliver an enhanced shopping experience to your customers. Built with TailwindCSS, GraphQL, and the Context API, this platform is fast, modern, and user-friendly. With a clean and responsive design.`,

    //   stack: [
    //     "React Native",
    //     "Context API",
    //     "Shopify API",
    //     "TailwindCSS",
    //     "GraphQL",
    //   ],
    //   url: "https://injestic.vercel.app/",
    // },
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
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Side projects</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
              {projects.map((project) => (
                <Card key={project.url} variant="outline">
                  <CardHeader>
                    <Heading size="md"> {project.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text mb={2}>{project.description}</Text>
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
