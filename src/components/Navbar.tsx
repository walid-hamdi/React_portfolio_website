import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState("");

  return (
    <ButtonGroup variant="link" spacing="8">
      {["HOME", "ABOUT"].map((item) => {
        const route = "/" + item.toLowerCase();
        const isActive = activeRoute === route;
        return (
          <Button
            className={isActive ? "active-button" : ""}
            onClick={() => {
              navigate(route);
              setActiveRoute(route);
            }}
            key={item}
          >
            {item}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default Navbar;
