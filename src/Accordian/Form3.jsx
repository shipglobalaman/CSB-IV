import Data3 from "./Data3";
import Accordian from "../UI/Accordian";

const Form3 = ({ isOpen, onClick, setActiveForm, activeForm }) => {
  const handleButtonClick = () => {
    if (!isOpen && activeForm >= 2) {
      onClick();
    }
  };
  return (

    <Accordian
      isOpen={isOpen}
      onClick={onClick}
      activeForm={activeForm}
      setActiveForm={setActiveForm}
      title={"Shipment Information"}
      num={3}
    >
      <div className={`${isOpen ? "" : "hidden"}`}>
        <Data3 setActiveForm={setActiveForm} />
      </div>
    </Accordian>
  );
};
export default Form3;
