export const ContactForm = ({
  formId,
  type,
  inputName,
  value,
  pattern,
  title,
  setName,
}) => {
  return (
    <label htmlFor={formId}>
      {inputName}
      <input
        onChange={setName}
        id={formId}
        type={type}
        name={inputName}
        value={value}
        pattern={pattern}
        title={title}
        required
      />
    </label>
  );
};
