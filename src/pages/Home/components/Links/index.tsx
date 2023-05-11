import { Box, IconButton } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

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
    <>
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
    </>
  );
};

export default Links;
