"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "keep-react-demo";

const PlayButtonComponent = () => {
  return (
    <PlayButton title="Play Video" type="primary" icon={<Play size="24" />} />
  );
};

export default PlayButtonComponent;
