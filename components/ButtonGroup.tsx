"use client";
import { Button } from "keep-react-demo";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

const ButtonGroupComponent = () => {
  return (
    <Button.Group>
      <Button color="info">
        <span className="pr-2">
          <Cube size={24} />
        </span>
        Profile
      </Button>
      <Button color="info">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button color="info">
        <span className="pr-2">
          <ChatCircleDots size={24} />
        </span>
        Messages
      </Button>
    </Button.Group>
  );
};

export default ButtonGroupComponent;
