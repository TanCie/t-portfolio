const Button = (props) => {
  const { text, classNames } = props;
  return (
    <button
      className={`${classNames} font-semibold text-white px-8 py-4 rounded-full bg-gradient-to-tl from-purple-400 to-blue-400`}
    >
      {text}
    </button>
  );
};

export default Button;
