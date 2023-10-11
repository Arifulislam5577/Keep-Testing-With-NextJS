"use client";
import { CheckBox } from "keep-react-demo";

const CheckboxComponent = () => {
  const handleChecked = (value: any) => {
    console.log(value);
  };

  return (
    <div className="flex flex-row gap-3">
      <CheckBox
        size="md"
        variant="square"
        label="Square"
        id="square"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
      <CheckBox
        size="md"
        variant="circle"
        label="Circle"
        id="circle"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </div>
  );
};

export default CheckboxComponent;
