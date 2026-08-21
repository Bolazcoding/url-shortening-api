type Props = {
  children: string;
  className: string;
};
function Button({ children, className }: Props) {
  return (
    <button
      className={`bg-primaryblue-400 text-white font-bold rounded-4xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
