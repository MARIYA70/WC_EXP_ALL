import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simple validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.firstName.length < 6) {
      setError("First Name must be at least 6 letters");
    } else if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
    } else if (!form.email.includes("@")) {
      setError("Enter a valid email");
    } else if (form.mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
    } else if (!form.lastName || !form.address) {
      setError("Last Name and Address cannot be empty");
    } else {
      alert("Registration Successful!");
      console.log(form);
      setError("");
      setForm({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        mobile: "",
        address: "",
      });
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        /><br /><br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        /><br /><br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        /><br /><br />
        <input
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
        /><br /><br />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default RegistrationForm;
