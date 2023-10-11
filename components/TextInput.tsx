"use client";
import { EyeSlash, Lock } from "phosphor-react";
import { Label, TextInput } from "keep-react-demo";

const InputComponent = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Label value="Gray Color Input" />
        <TextInput
          id="#id-1"
          placeholder="Gray Color Input"
          color="gray"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#5E718D" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#5E718D" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

export default InputComponent;
