import React, { useEffect, useState } from 'react';

const Toaster = ({ message }) => {
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    if (message) {
      setShowToaster(true);

      // Hide the toaster after 3 seconds (adjust as needed)
      const timer = setTimeout(() => {
        setShowToaster(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className={`toaster ${showToaster ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Toaster;
