import { Box, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { SiCreatereactapp } from "react-icons/si";

const Links = () => {
  const links = [
    {
      label: "LinkedIn",
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/in/hamdiwalid",
    },
    {
      label: "GitHub",
      icon: <BsGithub />,
      url: "https://github.com/walidhamdidev",
    },
    {
      label: "YouTutbe",
      icon: <BsYoutube />,
      url: "https://www.youtube.com/@walidhamdidev",
    },
  ];
  return (
    <HStack gap={3}>
      {links.map((link) => (
        <Box key={link.label}>
          <IconButton
            onClick={() => window.open(link.url, "_blank")}
            aria-label={link.label}
            size="sm"
            icon={link.icon}
          />
        </Box>
      ))}

      <Tooltip label="React Projects">
        <Box>
          <IconButton
            onClick={() => alert("React Projects")}
            aria-label="Projects"
            size="sm"
            icon={<SiCreatereactapp />}
          />
        </Box>
      </Tooltip>
    </HStack>
  );
};

export default Links;
