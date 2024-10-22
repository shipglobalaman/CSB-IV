import { useState } from "react";
import Accordian from "../UI/Accordian";
import Button from "../UI/Button";

const Form1 = ({ isOpen, activeForm, onClick, setActiveForm }) => {
  const [validateSelect, setvalidateSelect] = useState("");
  const [error, seterror] = useState("");

  const handlevalidateSelect = (e) => {
    setvalidateSelect(e.target.value);
    seterror("");
  };
  const handleSubmitButton = () => {
    if (!validateSelect) {
      seterror("Please Select something");
    } else {
      setActiveForm(2);
    }
  };
  return (
    <Accordian
      isOpen={isOpen}
      onClick={onClick}
      setActiveForm={setActiveForm}
      activeForm={activeForm}
      title={"Consignor Details"}
      num={1}
    >
      <h2 className="p-3 text-sm ml-1 ">Search Customer</h2>

      <div className="mb-14">
        <select
          className="w-[500px] h-11 mx-4 mb-1 border bg-white appearance-none text-gray-300 px-2"
          value={validateSelect}
          onChange={handlevalidateSelect}
        >
          <option value="">Search Customer</option>
          <option value="customer1">value</option>
        </select>
        {error && (
          <p className="text-xs font-semibold text-red-500 ml-4">{error}</p>
        )}{" "}
      </div>
      {/* <button
        className="bg-blue-900 w-24 ml-[580px] mb-5 text-white rounded-md p-1"
        onClick={handleSubmitButton}
      >
        Continue
      </button> */}
      <Button text={"Continue"} size={600} onClick={handleSubmitButton} />
    </Accordian>
  );
};
export default Form1;
