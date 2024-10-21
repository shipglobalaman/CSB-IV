import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Data3a = () => {
  const [addComponent, setAddComponent] = useState([{ component: "" }]);
  const handleAddComponent = () => {
    setAddComponent((prev) => [...prev, { component: "" }]);
  };
  const handleRemoveComponent = () => {
    addComponent.pop();
    setAddComponent([...addComponent]);
  };

  return (
    <div>
      <div className="flex">
        <h2 className="p-3 text-[20px] ml-1 font-bold ">Item(s) Details</h2>
        <div className="text-red-400 bg-orange-100 w-[150px] p-1 mt-4 h-6 rounded-lg text-sm flex items-center justify-center">
          Items that can export
        </div>
      </div>
      {/* starting code for component */}
      {addComponent.map((singleComponent, index) => (
        <div className="grid grid-cols-6 gap-9 mb-6 mx-4 ">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="w-[95px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter First Name..."
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              SKU <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="w-[95px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter SKU..."
            />
          </div>
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              HSN <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              className="w-[95px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter HSN..."
            />
          </div>
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              QTY <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="mobileNumber"
              min="0"
              max="100"
              step="1"
              className="w-[95px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter QTY..."
            />
          </div>
          <div>
            <label
              htmlFor="unitPrice"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Unit <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="unitPrice"
              min="0"
              max="100"
              step="1"
              className="w-[95px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
            />
          </div>
          <div className="flex items-center ">
            <div className="ml-[-10px]">
              <label
                htmlFor="IGST"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                IGST <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="IGST"
                className="w-[60px]  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="0%"
                readOnly
              />
            </div>

            {addComponent.length > 1 && (
              <button
                className="text-red-700 w-5 mt-6 ml-2 text-[25px]  rounded-md font-semibold "
                onClick={handleRemoveComponent}
              >
                <RiDeleteBin5Line />
              </button>
            )}
          </div>
        </div>
      ))}

      {/* end code for component */}

      <button
        className="text-blue-800 font-semibold ml-4"
        onClick={handleAddComponent}
      >
        + Add Another Product
      </button>

      
    </div>
  );
};
export default Data3a;
