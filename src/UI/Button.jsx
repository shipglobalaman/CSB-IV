const Button = ({ text, onClick, size }) => {
  return (
    <div>
      <button
        className="bg-blue-900 mb-5 text-white rounded-md p-2"
        style={{ marginLeft: `${size}px` }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
