import './Feedback.css';
function FeedBackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button className="item__button" onClick={onLeaveFeedback}>
        Good
      </button>

      <button className="item__button" onClick={onLeaveFeedback}>
        Neutral
      </button>

      <button className="item__button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
}

export default FeedBackOptions;
