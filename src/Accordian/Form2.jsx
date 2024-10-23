import Accordian from "../UI/Accordian";
import Data2 from "./Data2";
const Form2 = ({ isOpen, onClick, setActiveForm, activeForm }) => {
  return (
    <Accordian
      isOpen={isOpen}
      onClick={onClick}
      activeForm={activeForm}
      setActiveForm={setActiveForm}
      title={"Consignor Details"}
      num={2}
    >
      <Data2 setActiveForm={setActiveForm} isOpen={isOpen} />
    </Accordian>
  );
};
export default Form2;
