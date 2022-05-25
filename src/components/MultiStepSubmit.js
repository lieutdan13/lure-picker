import React from "react";
const Submit = (props) => {
  const { data, back } = props;
  const listItems = Object.entries(data).map(([key, value]) => (
    <li key={key}>
      <strong>{key}:</strong> {value}
    </li>
  ));
  return (
    <div>
      <b>State</b>
      <ul>{listItems}</ul>
      <button onClick={back}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );
};
export default Submit;
