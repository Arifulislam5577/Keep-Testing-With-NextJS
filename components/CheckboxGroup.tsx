"use client";
import { SetStateAction, useState } from "react";
import { SquaresFour } from "phosphor-react";
import { CheckboxGroup } from "keep-react-demo";

const CheckboxGroupComponent = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
  };
  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value8"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value9"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value10"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value11"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};

export default CheckboxGroupComponent;
