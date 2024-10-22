const Button = ({text,onClick,size}) => {
  return (
    <div>
      <button
        className={`bg-blue-900  ml-[${size}px] mb-5 text-white rounded-md p-1 `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
