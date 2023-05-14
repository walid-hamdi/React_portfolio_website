import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  IconButton,
  Tag,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsCodeSlash } from "react-icons/bs";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const currentProject = {
    title: "Game Hub",
    description: `Developed a Rawg clone using React hooks for state management, Chakra UI for styling, React Query for API data fetching and caching, and Zustand for global state management. Implemented features such as game search, sorting games by, getting games by platform, displaying genres, and game profile details.`,

    stack: ["React.js", "Chakra UI", "TypeScript", "Rawg API", "Zustand"],
    url: "https://game-hub-ivory-one.vercel.app/",
  };

  return (
    <>
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

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="xl" fontWeight="bold">
              Current project I'm working on ({currentProject.title})
            </AlertDialogHeader>

            <AlertDialogBody>
              {currentProject.description}
              <Flex flexWrap="wrap" gap={2} mt={4}>
                {currentProject.stack.map((item) => (
                  <Tag colorScheme="yellow" size="lg" key={item}>
                    <TagLabel>{item}</TagLabel>
                  </Tag>
                ))}
              </Flex>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                size="md"
                colorScheme="yellow"
                onClick={() => {
                  onClose();
                  window.open(currentProject.url, "_blank");
                }}
                ml={3}
              >
                Demo
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Projects;
