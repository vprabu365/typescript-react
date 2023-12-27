import React, { useEffect } from "react";
import "../Alert/alert.css";
type Props = {
  message: string;
  type: string;
  removeAlert: any;
};

const Alert = ({ message, type, removeAlert }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return (
    <div className="alert-section">
      <p className={`alert alert-${type}`}>{message}</p>
    </div>
  );
};

export default Alert;
