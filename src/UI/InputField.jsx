const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  name,
  required,
}) => (
  <div>
    <div className="flex flex-col justify-start">
      <label className=" text-sm font-medium text-gray-700 mb-1 ">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" //className
        placeholder={placeholder}
      />
    </div>
    {error && (
      <p className="text-red-500 text-xs font-semibold mt-1 ml-1">{error}</p>
    )}
  </div>
);

export default InputField;
