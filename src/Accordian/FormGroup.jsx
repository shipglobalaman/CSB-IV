import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

const FormGroup = () => {
  const [activeForm, setActiveForm] = useState(1);

  return (
    <div className=" grid justify-center items-center w-[700px] mx-64 my-10  gap-2 ">
      <div className=" flex flex-col mb-3">
        <h1 className="text-[25px] font-semibold">Create CSB-IV Order</h1>
        <h5 className="text-slate-300 flex text-sm">
          Orders{" "}
          <span className="mt-1">
            <IoIosArrowForward />
          </span>
          Create CSB-IV Order
        </h5>
      </div>
      <Form1
        isOpen={activeForm === 1} 
        setActiveForm={setActiveForm}
        activeForm={activeForm}
      />
      <Form2
        isOpen={activeForm === 2}
        setActiveForm={setActiveForm}
        activeForm={activeForm}
      />
      <Form3
        isOpen={activeForm === 3}
        setActiveForm={setActiveForm}
        activeForm={activeForm}
      />
      <Form4
        isOpen={activeForm === 4}
        setActiveForm={setActiveForm}
        activeForm={activeForm}
      />
    </div>
  );
};
export default FormGroup;
