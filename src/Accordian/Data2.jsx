import { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import SelectField from "../UI/SelectField";

const Data2 = ({ setActiveForm }) => {
  const [isSameAsCurrent, setIsSameAsCurrent] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    currentAddress1: "",
    currentAddress2: "",
    currentLandmark: "",
    currentCountry: "",
    currentState: "",
    currentCity: "",
    currentPincode: "",
  });

  const [permanentAddress, setPermanentAddress] = useState({
    address1: "",
    address2: "",
    landmark: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePermanentAddressChange = (e) => {
    const { name, value } = e.target;
    setPermanentAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckbox = (e) => {
    setIsSameAsCurrent(e.target.checked);
    if (e.target.checked) {
      setPermanentAddress({
        address1: formData.currentAddress1,
        address2: formData.currentAddress2,
        landmark: formData.currentLandmark,
        country: formData.currentCountry,
        state: formData.currentState,
        city: formData.currentCity,
        pincode: formData.currentPincode,
      });
    } else {
      setPermanentAddress({
        address1: "",
        address2: "",
        landmark: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
      });
    }
  };

  const [error, setError] = useState({});

  const validateFields = () => {
    const newError = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "mobileNumber",
      "email",
      "currentAddress1",
      "currentPincode",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newError[field] = `${field.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleContinue = () => {
    if (validateFields()) {
      setActiveForm(3);
    }
  };

  return (
    <div>
      <h2 className="p-3 text-sm ml-1 font-semibold ">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ml-4 mr-6">
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter First Name..."
          error={error.firstName}
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter Last Name..."
          error={error.lastName}
          required
        />
        <InputField
          label="Mobile Number"
          name="mobileNumber"
          type="tel"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          placeholder="Enter Mobile Number..."
          error={error.mobileNumber}
          required
        />
      </div>

      <div className="mb-6 ml-4">
        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email ID..."
          error={error.email}
          required
        />
      </div>

      {/* Current Address */}
      <h2 className="p-3 text-sm ml-1 font-semibold ">Shipping Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4">
        <InputField
          label="Address1"
          name="currentAddress1"
          value={formData.currentAddress1}
          onChange={handleInputChange}
          placeholder="Address Line 1"
          error={error.currentAddress1}
        />
        <InputField
          label="Address2"
          name="currentAddress2"
          value={formData.currentAddress2}
          onChange={handleInputChange}
          placeholder="Address Line 2"
          error={error.currentAddress2}
        />
        <InputField
          label="Landmark"
          name="currentLandmark"
          value={formData.currentLandmark}
          onChange={handleInputChange}
          placeholder="Landmark (Optional)"
          error={error.currentLandmark}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4">
        <SelectField
          label="Country"
          name="currentCountry"
          value={formData.currentCountry}
          onChange={handleInputChange}
          options={[
            { value: "", label: "Select Country" },
            { value: "in", label: "India" },
            { value: "ca", label: "Canada" },
          ]}
        />
        <SelectField
          label="State"
          name="currentState"
          value={formData.currentState}
          onChange={handleInputChange}
          options={[
            { value: "", label: "Select State" },
            { value: "up", label: "UP" },
            { value: "dl", label: "Delhi" },
          ]}
        />
        <InputField
          label="City"
          name="currentCity"
          value={formData.currentCity}
          onChange={handleInputChange}
          placeholder="Enter City..."
        />
      </div>

      <div className="ml-4 mb-4">
        <InputField
          label="Pincode"
          name="currentPincode"
          value={formData.currentPincode}
          onChange={handleInputChange}
          placeholder="Pincode"
          error={error.currentPincode}
        />
      </div>

      <label className="mx-4 text-sm">
        <input
          type="checkbox"
          checked={isSameAsCurrent}
          onChange={handleCheckbox}
        />
        &nbsp; &nbsp;Same as Billing Address
      </label>

      {/* Permanent Address */}
      {!isSameAsCurrent && (
        <>
          <h2 className="p-3 text-sm ml-1 font-semibold ">Billing Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mx-4 ">
            <InputField
              label="Address 1"
              name="address1"
              value={permanentAddress.address1}
              onChange={handlePermanentAddressChange}
              placeholder="Address Line 1"
            />
            <InputField
              label="Address 2"
              name="address2"
              value={permanentAddress.address2}
              onChange={handlePermanentAddressChange}
              placeholder="Address Line 2"
            />
            <InputField
              label="Landmark"
              name="landmark"
              value={permanentAddress.landmark}
              onChange={handlePermanentAddressChange}
              placeholder="Landmark (Optional)"
            />
            
              <SelectField
                label="Country"
                id="permanentCountry"
                value={permanentAddress.country}
                onChange={handlePermanentAddressChange}
                options={[
                  { value: "", label: "Select Country" },
                  { value: "us", label: "United States" },
                  { value: "ca", label: "Canada" },
                ]}
              />

              <SelectField
                label="State"
                id="permanentState"
                value={permanentAddress.state}
                onChange={handlePermanentAddressChange}
                options={[
                  { value: "", label: "Select State" },
                  { value: "up", label: "UP" },
                  { value: "dl", label: "Delhi" },
                ]}
              />

              <InputField
                label="City"
                id="permanentCity"
                value={permanentAddress.city}
                onChange={handlePermanentAddressChange}
                placeholder="City"
                error={error.permanentCity}
              />
            
            </div>
            <div className="mb-6 ml-4">
              <InputField
                label="Pincode"
                id="permanentPincode"
                value={permanentAddress.pincode}
                onChange={handlePermanentAddressChange}
                placeholder="Pincode"
                error={error.permanentPincode}
              />
            </div>
         
        </>
      )}

      <Button text={"Continue"} size={600} onClick={handleContinue} />
    </div>
  );
};

export default Data2;
