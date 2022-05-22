import AnswerButton from "./AnswerButton";

const Question = (props) => {
  const {
    data,
    fieldOptions,
    fieldKey,
    question,
    handleChange,
    next,
    back
  } = props;

  const handleClick = (event) => {
    event.preventDefault();
    handleChange(event);
    next();
  };

  const buttons = Object.entries(fieldOptions).map(([key, value]) => (
    <AnswerButton
      key={key}
      name={fieldKey}
      value={value.value}
      label={value.label}
      currentValue={data[fieldKey]}
      handleClick={handleClick}
    />
  ));

  return (
    <form>
      <p>
        <label htmlFor={fieldKey}>{question}</label>
        <br />
        {buttons}
      </p>
      {back && <button onClick={back}>Back</button>}
    </form>
  );
};

export default Question;
