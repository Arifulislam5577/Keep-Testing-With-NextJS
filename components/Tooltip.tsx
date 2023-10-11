"use client";
import { Button, Tooltip } from "keep-react-demo";

const TooltipComponent = () => {
  return (
    <Tooltip
      content="Tooltips text here"
      trigger="hover"
      placement="top"
      animation="duration-300"
      style="dark"
    >
      <Button size="sm" type="primary">
        Tooltip Top
      </Button>
    </Tooltip>
  );
};

export default TooltipComponent;
