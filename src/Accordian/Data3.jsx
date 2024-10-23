import Data3a from "./Data3a";
import { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import MeasureInput from "../UI/MeasureInput";
const Data3 = ({ setActiveForm }) => {
  const [invoiceNumber, setinvoiceNumber] = useState("");
  const [errorinvoiceNumber, setErrorinvoiceNumber] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [errorphoneNumber, setErrorphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [deadWeight, setDeadWeight] = useState("");
  const [errordeadWeight, setErrordeadWeight] = useState("");
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [height, setHeight] = useState("");

  // validation on the second part
  const validate = (e) => {
    e.preventDefault();
    let isValid = true;
    let tempinvoiceNumber = "";
    let tempphoneNumber = "";
    let tempemail = "";
    let tempdeadWeight = "";

    const invoiceRegEx = /[a-zA-Z0-9]+$/;
    const phoneNumberRegEx = /^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const emailRegEx = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const deadWeightRegEx = /^\d*\.?\d*$/;
    if (invoiceNumber === "") {
      tempinvoiceNumber = "Enter invoice";
      isValid = false;
    } else if (!invoiceRegEx.test(invoiceNumber)) {
      tempinvoiceNumber = "Enter Alphanumeric values";
      isValid = false;
    }
    if (phoneNumber === "") {
      tempphoneNumber = "Enter phoneNumber";
      isValid = false;
    } else if (!phoneNumberRegEx.test(phoneNumber)) {
      tempphoneNumber = "Enter Valid PhoneNo";
      isValid = false;
    }
    if (email === "") {
      tempemail = "Enter Email";
      isValid = false;
    } else if (!emailRegEx.test(email)) {
      tempemail = "Enter Valid Email";
      isValid = false;
    }
    if (deadWeight === "") {
      tempdeadWeight = "Minimum deadWeight 0.25";
      isValid = false;
    } else if (!deadWeightRegEx.test(deadWeight)) {
      tempdeadWeight = "Enter Valid deadWeight";
      isValid = false;
    }

    setErrorinvoiceNumber(tempinvoiceNumber);
    setErrorphoneNumber(tempphoneNumber);
    setErrorEmail(tempemail);
    setErrordeadWeight(tempdeadWeight);
    if (isValid) {
      setActiveForm(4);
    }
  };

  return (
    <div className="w-[700px] bg-white border-[1px] border-slate-300 p-4">
      {/* Below Div conatining 5 basic info */}
      <div className="grid grid-cols-1 md:grid-cols-3 pt-2 gap-4 mb-6 mx-4">
        {/* <div>
          <label
            htmlFor="invoiceNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Invoice Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="invoiceNumber"
            value={invoiceNumber}
            onChange={(e) => setinvoiceNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Invoice No..."
          />
          <p className="text-red-600 text-xs font-semibold ml-1 mt-1">
            {errorinvoiceNumber}
          </p>

      
        </div> */}
        <InputField
          label="Invoice Number"
          type="text"
          value={invoiceNumber}
          onChange={(e) => setinvoiceNumber(e.target.value)}
          placeholder="Enter Invoice No..."
          error={errorinvoiceNumber}
          required
        />
        {/* <div>
          <label
            htmlFor="invoiceDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Invoice Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="invoiceDate"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-[42px]"
            placeholder="Enter Last Name..."
          />
        </div> */}
        <InputField
          label="Invoice Date"
          type="date"
          name="invoiceDate"
          placeholder="Select Invoice Date..."
          required
        />
        {/* <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number <span className="text-purple-900">*</span>
          </label>
          <input
            type="tel"
            id="mobileNumber"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter Mobile Number..."
          />
          <p className="text-red-600 text-xs font-semibold ml-1 mt-1">
            {errorphoneNumber}
          </p>
        </div> */}
        <InputField
          label="Mobile Number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
          placeholder="Enter Mobile Number..."
          error={errorphoneNumber}
          required
        />
      </div>

      <div className="mb-6 ml-4 w-52">
        {/* <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1  mx-4"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          className="w-[210px] ml-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter Email ID..."
        />
        <p className="text-red-600 text-xs font-semibold ml-5 mt-1">
          {errorEmail}
        </p> */}
        <InputField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email ID..."
          error={errorEmail}
          required
        />
      </div>

      {/* second part of the form */}
      <div>
        <div className="pt-1  px-4">
          <h2 className=" text-[20px] font-bold ">Box Measurements</h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-2 pb-7 py-2 px-4 md:grid-cols-2">
          <MeasureInput
            label="Dead Weight"
            value={deadWeight}
            onChange={(e) => setDeadWeight(e.target.value)}
            placeholder="Eg. 1.25"
            error={errordeadWeight}
            required
          />
          <MeasureInput
            label="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Eg. 1.25"
            // error={errorLength}
            required
          />

          <MeasureInput
            label="Breadth"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
            placeholder="Eg. 1.25"
            // error={errorBreadth}
            required
          />

          <MeasureInput
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Eg. 1.25"
            // error={errorHeight}
            required
          />
        </div>
      </div>

      {/* code for adding and removing functionality */}
      <div>
        <Data3a />
      </div>
      <Button size={530} text={"Select Shipping"} onClick={validate} />
    </div>
  );
};

export default Data3;
