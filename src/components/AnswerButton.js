const AnswerButton = ({ name, value, label, handleClick, currentValue }) => {
  return (
    <button
      name={name}
      value={value}
      onClick={handleClick}
      className={`btn ${currentValue === value ? "btnActive" : ""}`}
    >
      {label}
    </button>
  );
};

export default AnswerButton;
