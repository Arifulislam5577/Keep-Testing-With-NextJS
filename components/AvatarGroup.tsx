"use client";
import { Avatar } from "keep-react-demo";

const AvatarWithAddIcon = () => {
  return (
    <Avatar.Group>
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-1.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-2.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-3.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-5.png"
      />
      <Avatar shape="round" size="md" stacked={true} />
      <Avatar shape="round" size="md" stacked={true} />
      <Avatar.Add
        icon="/images/icon/plus.png"
        bg="#444D61"
        size="md"
        ringColor="ring-[#444D61]"
        iconColor="text-white"
      />
    </Avatar.Group>
  );
};

export default AvatarWithAddIcon;
