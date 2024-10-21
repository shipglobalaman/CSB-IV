import { useState } from "react";
import Button from "../UI/Button";

const Data2 = ({ isOpen, setActiveForm }) => {
  const [isSameAsCurrent, setIsSameAsCurrent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  // State for currentAddress
  const [currentAddress1, setCurrentAddress1] = useState("");
  const [currentAddress2, setCurrentAddress2] = useState("");
  const [currentLandmark, setCurrentLandmark] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  // const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentPincode, setCurrentPincode] = useState("");

  // State for permanentAddress
  const [permanentAddress1, setPermanentAddress1] = useState("");
  const [permanentAddress2, setPermanentAddress2] = useState("");
  const [permanentLandmark, setPermanentLandmark] = useState("");
  const [permanentCountry, setPermanentCountry] = useState("");
  // const [permanentState, setPermanentState] = useState("");
  const [permanentCity, setPermanentCity] = useState("");
  const [permanentPincode, setPermanentPincode] = useState("");

  const handleCheckbox = (e) => {
    setIsSameAsCurrent(e.target.checked);
    if (e.target.checked) {
      setPermanentAddress1(currentAddress1);
      setPermanentAddress2(currentAddress2);
      setPermanentLandmark(currentLandmark);
      setPermanentCountry(currentCountry);
      // setPermanentState(currentState);
      setPermanentCity(currentCity);
      setPermanentPincode(currentPincode);
    } else {
      setPermanentAddress1("");
      setPermanentAddress2("");
      setPermanentLandmark("");
      setPermanentCountry("");
      // setPermanentState("");
      setPermanentCity("");
      setPermanentPincode("");
    }
  };

  // PUTTING UP VALIDATION
  // const [formData, setFormData] = useState(
  //   (firstName = ""),
  //   (lastName = ""),
  //   (mobileNumber = ""),
  //   (email = "")
  // );
  const [error, seterror] = useState({});

  // const requireFields = ["firstName", "lastName", "mobileNumber", "email"];
  const validateFields = () => {
    const newError = {};
    // requireFields.forEach((fields) => {

// const Fields = [
// {
// key:first name,
// placeholder: First Name
// },
// {
// key:first name,
// placeholder: First Name
// }
// ]

//Fields.map((prop)=>(if not property)   newError.prop.key = `${prop.placeholder} is req`)


    if (!firstName) {
      newError.firstName = "First Name is required.";
    }
    if (!lastName) {
      newError.lastName = "Last Name is required.";
    }
    if (!mobileNumber) {
      newError.mobileNumber = "Mobile Number is required.";
    }
    if (!email) {
      newError.email = "Email is required.";
    }
    if (!currentAddress1) {
      newError.currentAddress1 = "Address is required.";
    }
    if (!currentAddress2) {
      newError.currentAddress2 = "Address is required.";
    }
    if (!currentPincode) {
      newError.currentPincode = "Pincode is required.";
    }
   
    if (!currentPincode) {
      newError.currentPincode = "Pincode is required.";
    }
    // });
    seterror(newError);
    return Object.keys(newError).length === 0;
  };

  // END OF VALIDATION
  const handleContinue = () => {
    if (validateFields()) {
      setActiveForm(3);
    }
  };

  return (
    // <div
    //   className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${
    //     isOpen ? "max-h-[990px] border-[1px]" : "max-h-0"
    //   }
    // w-[700px] bg-white  `}
    // >
    <div>
      <h2 className="p-3 text-sm ml-1 font-semibold ">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter First Name..."
          />
          {error.firstName && (
            <p className="text-red-500 text-xs font-semibold mt-1 ml-1">{error.firstName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Last Name..."
          />
          {error.lastName && (
            <p className="text-red-500 text-xs font-semibold mt-1 ml-1">{error.lastName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Mobile Number..."
          />
          {error.mobileNumber && (
            //<ErrorCompoennt title = {error.mobileNumber}/>
            <p className="text-red-500 text-xs font-semibold mt-1 ml-1">{error.mobileNumber}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1  mx-4"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[210px] ml-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter Email ID..."
        />
        {error.email && (
          <p className="text-red-500 text-xs font-semibold mt-1 ml-4">{error.email}</p>
        )}
      </div>

      {/* Code for shipping address */}

      <h2 className="p-3 text-sm ml-1 font-semibold ">Shipping Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4">
        <div>
          <label
            htmlFor="address1"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address 1 <span className="text-red-500">*</span>
          </label>
          <input
            value={currentAddress1}
            onChange={(e) => setCurrentAddress1(e.target.value)}
            type="text"
            id="address1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Address 1..."
          />
          {error.currentAddress1 && (
            <p className="text-red-500 text-xs font-semibold mt-1 ml-1">{error.currentAddress1}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="address2"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address 2 <span className="text-red-500">*</span>
          </label>
          <input
            value={currentAddress2}
            onChange={(e) => setCurrentAddress2(e.target.value)}
            type="text"
            id="address2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Address 2..."
          />
          {error.currentAddress2 && (
            <p className="text-red-500 text-xs font-semibold mt-1 ml-1">{error.currentAddress2}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="landmark"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Landmark
          </label>
          <input
            value={currentLandmark}
            onChange={(e) => setCurrentLandmark(e.target.value)}
            type="text"
            id="landmark"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Landmark..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country <span className="text-red-500">*</span>
          </label>
          <select
            value={currentCountry}
            onChange={(e) => setCurrentCountry(e.target.value)}
            id="country"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none text-gray-300"
          >
            <option>Select Country</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            State <span className="text-red-500">*</span>
          </label>
          <select
            // value={currentAddress}
            // onChange={handleCurrentAddressChange}
            id="state"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none text-gray-300"
          >
            <option>Select State</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City <span className="text-red-500">*</span>
          </label>
          <input
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            type="text"
            id="city"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter City..."
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="pincode"
          className="block text-sm font-medium text-gray-700 mb-1 mx-4"
        >
          Pincode <span className="text-red-500">*</span>
        </label>
        <input
          value={currentPincode}
          onChange={(e) => setCurrentPincode(e.target.value)}
          type="text"
          id="pincode"
          className="w-[210px] ml-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter Pincode..."
        />
        {error.currentPincode && (
          <p className="text-red-500 text-xs font-semibold mt-1 ml-4">{error.currentPincode}</p>
        )}
      </div>

      <label className="mx-4 text-sm">
        <input
          type="checkbox"
          checked={isSameAsCurrent}
          onChange={handleCheckbox}
        />
        &nbsp; &nbsp;Same as Current Address
      </label>

      {/* Code for permanent Address */}
      {!isSameAsCurrent && (
        <div>
          <h2 className="p-3 text-sm ml-1 font-semibold ">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4">
            <div>
              <label
                htmlFor="address1"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address 1 <span className="text-red-500">*</span>
              </label>
              <input
                value={permanentAddress1}
                onChange={(e) => setPermanentAddress1(e.target.value)}
                type="text"
                id="address1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Address 1..."
              />
            </div>
            <div>
              <label
                htmlFor="address2"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address 2 <span className="text-red-500">*</span>
              </label>
              <input
                value={permanentAddress2}
                onChange={(e) => setPermanentAddress2(e.target.value)}
                type="text"
                id="address2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Address 2..."
              />
            </div>
            <div>
              <label
                htmlFor="landmark"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Landmark
              </label>
              <input
                value={permanentLandmark}
                onChange={(e) => setPermanentLandmark(e.target.value)}
                type="text"
                id="landmark"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Landmark..."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <select
                // value={permanentAddress}
                // onChange={handlePermanentAddressChange}
                id="country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none text-gray-300"
              >
                <option>Select Country</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State <span className="text-red-500">*</span>
              </label>
              <select
                // value={permanentAddress}
                // onChange={handlePermanentAddressChange}
                id="state"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none text-gray-300"
              >
                <option>Select State</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                value={permanentCity}
                onChange={(e) => setPermanentCity(e.target.value)}
                type="text"
                id="city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter City..."
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              value={permanentPincode}
              onChange={(e) => setPermanentPincode(e.target.value)}
              type="text"
              id="pincode"
              className="w-[210px] ml-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Pincode..."
            />
          </div>
        </div>
      )}
      {/* <button
        className="bg-blue-900 w-24 ml-[580px] mb-5 text-white rounded-md p-1"
        onClick={handleContinue}
      >
        Continue
      </button> */}
      <Button text={"Continue"} onClick={handleContinue} />
    </div>
  );
};
export default Data2;
