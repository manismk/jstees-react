export const InputCheckbox = ({
  changeHandler,
  id,
  value,
  checkedState,
  labelName,
}) => {
  return (
    <div className="input--primary">
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        checked={checkedState}
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};
