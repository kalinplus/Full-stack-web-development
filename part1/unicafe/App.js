import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Text = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      {props.text === "positive" ? (
        <td>{100 * props.value}%</td>
      ) : (
        <td>{props.value}</td>
      )}
    </tr>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      {props.all !== 0 ? (
        <div>
          <Text text="good" value={props.good} />
          <Text text="neutral" value={props.neutral} />
          <Text text="bad" value={props.bad} />
          <Text text="all" value={props.all} />
          <Text text="average" value={props.average} />
          <Text text="positive" value={props.positive} />
        </div>
      ) : (
        <div>
          <p>No feedback given</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <hr />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
