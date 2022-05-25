const LureItem = (props) => {
  const { lure } = props;

  return (
    <tr>
      <td>{lure.lure_type}</td>
      <td>{lure.colors.join(", ")}</td>
    </tr>
  );
};

export default LureItem;
