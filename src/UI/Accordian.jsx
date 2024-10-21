import { Children } from "react";

const Accordian = ({ children, isOpen, activeForm, title, onClick, num ,setActiveForm }) => {
  return (
    <div>
      {/* this div is for title */}
      <div
        className={`${
          isOpen ? "bg-slate-50" : "bg-white"
        } w-[700px] text-left px-4 py-3 flex justify-between items-center focus:outline-none  rounded-sm border-[1px] border-slate-300`}
      >
        <div className="h-8  ">
          <span
            className={`${
              !isOpen && activeForm >= num
                ? "bg-green-500 text-white "
                : !isOpen
                ? "bg-slate-200 text-black"
                : "bg-black text-white"
            } rounded-md  text-sm px-2 py-1 `}
          >
            {!isOpen && activeForm >= num ? "✓" : num}
          </span>
          <span className="text-[15px] font-medium mx-4">
            {/* title prop */}
            {title}
          </span>
        </div>
        <button
          onClick={!isOpen && activeForm >= num ?()=>setActiveForm(num): null} //handleNExt
          className="text-blue-900  mr-1"
        >
          {!isOpen && activeForm >= num + 1 ? <u>Change</u> : null}
        </button>
      </div>
      {/* end of title div */}

      {/* div for main content */}
      <div
        className={`transition-[max-height] duration-500 ease-out overflow-hidden ${
          isOpen ? "max-h-[1000px] border-[1px] " : "max-h-0"
        }
        w-[700px] bg-white  grid`}
      >
        {children}
      </div>
    </div>
  );
};
export default Accordian;
