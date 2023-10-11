"use client";
import { Spinner } from "keep-react-demo";

const SpinnerComponent = () => {
  return (
    <div className="flex gap-3">
      <Spinner color="failure" size="lg" />
      <Spinner color="gray" size="lg" />
      <Spinner color="info" size="lg" />
      <Spinner color="pink" size="lg" />
      <Spinner color="purple" size="lg" />
      <Spinner color="success" size="lg" />
      <Spinner color="warning" size="lg" />
    </div>
  );
};

export default SpinnerComponent;
