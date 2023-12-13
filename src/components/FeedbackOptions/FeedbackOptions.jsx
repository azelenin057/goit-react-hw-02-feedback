import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.divFeed}>
    {Object.keys(options).map(option => (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
