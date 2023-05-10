import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ButtonGroup variant="link" spacing="8">
      {["HOME", "ABOUT"].map((item) => (
        <Button onClick={() => navigate("/" + item.toLowerCase())} key={item}>
          {item}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Navbar;
