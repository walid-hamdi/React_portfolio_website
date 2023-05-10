import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";

import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { SiCreatereactapp } from "react-icons/si";
import profile from "../../assets/porfile.png";

const Home = () => {
  return (
    <HStack flexDir="column">
      <Box py={5}>
        <Avatar size="2xl" name="Walid Hamdi" src={profile} />
      </Box>
      <Box pb={10} textAlign="center">
        <Heading size="lg" as="h2">
          Hey, I'm Walid
        </Heading>
        <Heading py={2} size="md" as="h4">
          A React Developer.
        </Heading>
      </Box>

      <HStack gap={3}>
        <Box>
          <IconButton
            onClick={() => alert("LinkedIn")}
            aria-label="LinkedIn"
            size="lg"
            icon={<BsLinkedin />}
          />
        </Box>
        <Box>
          <IconButton
            onClick={() => alert("GitHub")}
            aria-label="GitHub"
            size="lg"
            icon={<BsGithub />}
          />
        </Box>
        <Box>
          <IconButton
            onClick={() => alert("YouTutbe")}
            aria-label="YouTube"
            size="lg"
            icon={<BsYoutube />}
          />
        </Box>

        <Tooltip label="React Projects">
          <Box>
            <IconButton
              onClick={() => alert("React Projects")}
              aria-label="Projects"
              size="lg"
              icon={<SiCreatereactapp />}
            />
          </Box>
        </Tooltip>
      </HStack>
    </HStack>
  );
};

export default Home;
