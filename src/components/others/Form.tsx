import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <label htmlFor={form.firstName}>Hello</label>
      </form>

      <button>Click Me</button>
    </>
  );
};

export default Form;
