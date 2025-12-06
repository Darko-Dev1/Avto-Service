import React, { useState } from 'react';

/**
 * A simple, reusable input field component for a login form.
 *
 * @param {string} type - The HTML input type (e.g., "text", "email", "password").
 * @param {string} label - The label displayed above the input.
 * @param {string} placeholder - The text displayed inside the input when empty.
 */
const CustomInput = ({ type, label, placeholder }) => {
  // Use local state to manage the input's current value
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      {/* Label for accessibility and clarity */}
      <label htmlFor={type} style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        {label}
      </label>
      
      {/* The actual input element */}
      <input
        id={type}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required // Simple HTML validation
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          boxSizing: 'border-box'
        }}
      />
      
      {/* Optional: Display current value for debugging */}
      {/* <p style={{ fontSize: '12px', color: '#666' }}>Current Value: {value}</p> */}
    </div>
  );
};

export default CustomInput;