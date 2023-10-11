"use client";
import { Steps } from "keep-react-demo";
import { Club, DownloadSimple, Globe } from "phosphor-react";

const StepComponent = () => {
  return (
    <Steps stepType="point" borderType="dashed">
      <Steps.Item
        completed
        icon={<Globe size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        completed
        icon={<DownloadSimple size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Steps.Item
        active
        icon={<Club size={20} />}
        title="Visit Keep Design Site"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Steps>
  );
};

export default StepComponent;
