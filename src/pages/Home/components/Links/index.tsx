import { Box, IconButton } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Links = () => {
  const links = [
    {
      label: "LinkedIn",
      icon: <BsLinkedin size={15} />,
      url: "https://www.linkedin.com/in/hamdiwalid",
    },
    {
      label: "GitHub",
      icon: <BsGithub size={15} />,
      url: "https://github.com/walid-hamdi",
    },
    {
      label: "YouTutbe",
      icon: <BsYoutube size={15} />,
      url: "https://www.youtube.com/@walid-hamdi",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <Box key={link.label}>
          <IconButton
            colorScheme="gray"
            variant="outline"
            onClick={() => window.open(link.url, "_blank")}
            aria-label={link.label}
            size="sm"
            icon={link.icon}
          />
        </Box>
      ))}
    </>
  );
};

export default Links;
