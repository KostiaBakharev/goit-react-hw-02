import css from "./Feedback.module.css";

const Feedback = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Feedback;
