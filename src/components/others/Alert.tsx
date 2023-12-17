import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  color: "primary" | "danger" | "success";
};

const Alert = ({ children, color }: Props) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleToggle = () => {
    setIsAlertVisible((prevState: boolean) => !prevState);
  };

  return (
    <>
      <button className={"btn btn-" + color} onClick={handleToggle}>
        Click me
      </button>

      {isAlertVisible && (
        <div className={"alert alert-" + color}>
          {children}
          <button type="button" onClick={handleToggle} className="btn-close" />
        </div>
      )}
    </>
  );
};

export default Alert;
