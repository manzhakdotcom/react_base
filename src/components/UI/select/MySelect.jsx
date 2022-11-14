import React from 'react';

const MySelect = ({ options, defaultValue, value, handlerOnChange }) => {
  return (
    <select value={value} onChange={e => handlerOnChange(e.target.value)}>
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
