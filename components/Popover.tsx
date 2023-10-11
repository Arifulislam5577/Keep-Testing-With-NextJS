"use client";
import { Button, Popover } from "keep-react-demo";

const PopoverComponent = () => {
  return (
    <Popover
      title="Popover title here"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      additinalContent={
        <div className="flex items-center gap-3 mt-3">
          <Button type="outlinePrimary" size="xs">
            Checkout
          </Button>
          <button className="text-sm font-medium underline text-primary-400 underline-offset-[3px]">
            Skip Now
          </button>
        </div>
      }
    >
      <Button size="xs">Popover</Button>
    </Popover>
  );
};

export default PopoverComponent;
