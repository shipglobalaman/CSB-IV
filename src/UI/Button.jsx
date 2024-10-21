const Button = ({text,onClick}) => {
  return (
    <div>
      <button
        className="bg-blue-900  ml-[550px] mb-5 text-white rounded-md p-1 "
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
