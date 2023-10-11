"use client";
import { useState } from "react";
import Link from "next/link";
import { Alert } from "keep-react-demo";
import { CheckCircle } from "phosphor-react";

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const onDissMiss = () => {
    setShowAlert(!showAlert);
  };
  return (
    <Alert
      color="success"
      rounded={true}
      withBorder={true}
      withBorderAccent
      onDismiss={onDissMiss}
      dismiss={showAlert}
      withBorderAccentPosition="left"
      additionalContent={
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          <Link href="/" className="ml-2 text-primary-500 underline">
            Link style
          </Link>
        </div>
      }
      title="Default message - make it short"
      icon={<CheckCircle size={24} color="#0A9952" />}
    />
  );
};

export default AlertComponent;
