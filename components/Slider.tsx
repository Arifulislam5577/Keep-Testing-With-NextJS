"use client";
import { Slider } from "keep-react-demo";

const SliderComponent = () => {
  return (
    <Slider
      range
      min={100}
      max={1000}
      defaultValue={[100, 300]}
      tooltip="top"
      draggableTrack
      onChange={(value) => console.log(value)}
    />
  );
};

export default SliderComponent;
