export const InputRadioButton = ({
  changeHandler,
  name,
  id,
  value,
  checkedState,
  labelName,
}) => {
  return (
    <div className="input--primary">
      <input
        type="radio"
        name={name}
        id={id}
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
