const FormInput = ({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered"
        required={required}
      />
    </div>
  );
};
export default FormInput;
