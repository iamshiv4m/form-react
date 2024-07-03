import React, { useState } from "react";
import "./DynamicForm.css";
import InputTypes from "../../constant/formConfig.";

const DynamicForm = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({});

  /**
   * Handles form input changes and updates formData state accordingly.
   * @param {Object} e - Event object
   */
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Handle gender separately
    if (name === "gender") {
      setFormData({
        ...formData,
        gender: value,
      });
    } else if (type === "radio") {
      // Reset all fields except the radio buttons and gender
      setFormData((prevData) => {
        const newFormData = { gender: prevData.gender, [name]: value };
        return newFormData;
      });
    } else {
      // Update formData with other input fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  /**
   * Handles form submission.
   * @param {Object} e - Event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  /**
   * Renders form inputs based on provided configuration.
   * @param {Object} field - Field configuration object
   * @returns {JSX.Element} Rendered form field
   */
  const renderInput = (field) => {
    switch (field.type) {
      case InputTypes.TEXT:
      case InputTypes.PASSWORD:
        return (
          <div className="form-field" key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          </div>
        );
      case InputTypes.DROPDOWN:
        return (
          <div className="form-field" key={field.name}>
            <label>{field.label}</label>
            <select
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select {field.label}
              </option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case InputTypes.RADIO:
        return (
          <div className="form-field" key={field.name}>
            <label>{field.label}</label>
            <div className="radio-group">
              {field.options.map((option) => (
                <label key={option.value}>
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={formData[field.name] === option.value}
                    onChange={handleChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {config.map((field) => renderInput(field))}
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
