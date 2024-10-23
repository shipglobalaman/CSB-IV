import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import InputField from "../UI/InputField";

const Data3a = () => {
  const [product, setProduct] = useState("");
  const [sku, setSKU] = useState("");
  const [hsn, setHSN] = useState("");
  const [qty, setQty] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [addComponent, setAddComponent] = useState([{ component: "" }]);
  const handleAddComponent = () => {
    setAddComponent((prev) => [...prev, { component: "" }]);
  };
  const handleRemoveComponent = () => {
    addComponent.pop();
    setAddComponent([...addComponent]);
  };

  return (
    <div >
      <div >
        <div className="flex">
          <h2 className="p-3 text-[20px] ml-1 font-bold ">Item(s) Details</h2>
          <div className="text-red-400 bg-orange-100 w-[150px] p-1 mt-4 h-6 rounded-lg text-sm flex items-center justify-center">
            Items that can export
          </div>
        </div>
        {/* starting code for component */}

        {addComponent.map(() => (
          <div className="flex gap-2 mb-6 ml-4 ">
            <InputField
              label="Product"
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Enter Product Name..."
              required
            />

            <InputField
              label="SKU"
              type="text"
              value={sku}
              onChange={(e) => setSKU(e.target.value)}
              placeholder="Enter SKU..."
              required
            />

            <InputField
              label="HSN"
              type="text"
              value={hsn}
              onChange={(e) => setHSN(e.target.value)}
              placeholder="Enter HSN..."
              required
            />

            <InputField
              label="QTY"
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              placeholder="Enter QTY..."
              required
              name="qty"
            />

            <InputField
              label="Unit"
              type="number"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              placeholder="0"
              required
              name="unitPrice"
            />
            
              
                <InputField
                  label="IGST"
                  type="text"
                  value="0%"
                  placeholder="0%"
                  readOnly
                  required
                />
              

              {addComponent.length > 1 && (
                <button
                  className="text-red-700 w-5 mt-6 ml-2 text-[25px]  rounded-md font-semibold "
                  onClick={handleRemoveComponent}
                >
                  <RiDeleteBin5Line />
                </button>
              )}
            
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
    </div>
  );
};
export default Data3a;
