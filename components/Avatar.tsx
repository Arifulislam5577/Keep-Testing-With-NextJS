"use client";
import { Avatar } from "keep-react-demo";

const AvatarComponent = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar shape="round" size="lg" />
      <Avatar shape="roundSquare" size="lg" />
      <Avatar shape="square" size="lg" />
    </div>
  );
};

export default AvatarComponent;
