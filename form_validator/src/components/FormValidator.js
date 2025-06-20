import React, { useState } from "react";
import zxcvbn from "zxcvbn";
import "../styles/FormValidator.css";

const FormValidator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email address.";
        break;
      case "password":
        if (value.length < 6) error = "Password must be at least 6 characters.";
        break;
      case "confirmPassword":
        if (value !== formData.password) error = "Passwords do not match.";
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) error = "Phone must be 10 digits.";
        break;
      case "dob":
        if (!value) error = "Date of birth is required.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const strength = zxcvbn(formData.password).score;

  const isFormValid = Object.values(errors).every((e) => !e) &&
    Object.values(formData).every((v) => v);

  const handleReset = () => {
    setFormData({ name: "", email: "", password: "", confirmPassword: "", phone: "", dob: "" });
    setErrors({});
    setShowPassword(false);
  };

  return (
    <form className="form" autoComplete="off">
      {[
        { name: "name", label: "Name" },
        { name: "email", label: "Email" },
        { name: "password", label: "Password" },
        { name: "confirmPassword", label: "Confirm Password" },
        { name: "phone", label: "Phone Number" },
        { name: "dob", label: "Date of Birth", type: "date" },
      ].map(({ name, label, type }) => (
        <div key={name} className="form-group">
          <label htmlFor={name}>{label}</label>
          <input
            type={
              (name === "password" || name === "confirmPassword")
                ? (showPassword ? "text" : "password")
                : type || "text"
            }

            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            aria-describedby={`${name}Error`}
          />
          {errors[name] && <span id={`${name}Error`} className="error">{errors[name]}</span>}
        </div>
      ))}

      <button
        type="button"
        className="toggle-btn"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"} Passwords
      </button>

      <div className="password-strength">
        <label>Password Strength:</label>
        <progress value={strength} max="4"></progress>
      </div>

      <button type="button" className="submit-btn" disabled={!isFormValid}>
        Submit
      </button>
      <button type="button" className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default FormValidator;
