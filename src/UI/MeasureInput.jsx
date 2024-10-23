import React from 'react';

const MeasureInput = ({ label, value, onChange, placeholder, error, required }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <div className="flex rounded-md mt-2">
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-grow p-2 border rounded-l-md focus:border-l-indigo-600 focus:border-t-indigo-600 focus:border-b-indigo-600 focus:outline-none transition-all duration-200 hover:bg-gray-50 w-28"
        />
        <span className="px-3 bg-gray-200 rounded-r-md py-1.5">kg</span>
      </div>
      {error && (
        <p className="text-red-600 text-xs font-semibold ml-1 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default MeasureInput;
