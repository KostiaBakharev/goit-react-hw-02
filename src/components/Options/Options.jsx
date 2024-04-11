import css from "./Options.module.css";

export const Options = ({
  options,
  onLeaveFeedback,
  totalFeedback,
  onReset,
}) => {
  return (
    <div className={css.wrap}>
      {options.map((option) => (
        <button
          className={`${css.button} ${css[option]}`}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
