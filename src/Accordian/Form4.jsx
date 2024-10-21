import Accordian from "../UI/Accordian";
import Data4 from "./Data4";
const Form4 = ({ isOpen, onClick ,activeForm}) => {
  return (
    <Accordian isOpen={isOpen}
    onClick={onClick}
    activeForm={activeForm}
    title={"Select Shipping Partner"}
    num={5}> <Data4></Data4> </Accordian>
  );
};
export default Form4;
