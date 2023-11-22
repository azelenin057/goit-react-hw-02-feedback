const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => (
      <button key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
