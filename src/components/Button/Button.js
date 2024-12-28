import "./Button.scss";

function Button({
  children,
  onClick,
  variant = "default",
  border = false,
  arrow = false,
}) {
  return (
    <>
      <button
        className={`button button--${variant} ${
          border ? "button--border" : ""
        }`}
        onClick={onClick}
      >
        {children}
        {arrow && <span className="button__arrow"></span>}
      </button>
    </>
  );
}
export default Button;
