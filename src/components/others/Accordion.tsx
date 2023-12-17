import React, { useState } from "react";

type Props = {
  header: string;
  content: string;
};
const Accordion = ({ header, content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            onClick={toggleContent}
            className={
              isOpen ? "accordion-button" : "accordion-button collapsed"
            }
          >
            {header}
          </button>
        </h2>

        {isOpen && (
          <div className="accordion-body">
            <strong>{content}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
