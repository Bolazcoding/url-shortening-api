type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};
function Button({ children, className, type, disabled, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={` text-white font-bold rounded-4xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
