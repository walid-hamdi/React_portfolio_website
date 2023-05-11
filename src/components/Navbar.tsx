import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <ButtonGroup variant="link" spacing="8">
      {["Home", "About"].map((item) => {
        let route = "/" + item.toLowerCase();
        if (item === "Home") route = "/";

        const isActive = activeRoute === route;
        return (
          <Button
            marginTop={4}
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
