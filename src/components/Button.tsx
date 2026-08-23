type Props = {
  children: string;
  className: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
function Button({ children, className, type, disabled }: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-primaryblue-400 text-white font-bold rounded-4xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
