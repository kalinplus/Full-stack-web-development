import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [voteArray, setVoteArray] = useState(new Int32Array(anecdotes.length));

  const handleNextAnec = () => {
    const ri = Math.floor(Math.random() * anecdotes.length);
    setSelected(ri);
  };

  const handleVote = () => {
    const copyVote = [...voteArray];
    copyVote[selected] += 1;
    setVoteArray(copyVote);
  };

  const getMaxVoteIndex = () => {
    let maxVoteIndex = 0;
    for (let i = 0; i < anecdotes.length; i += 1) {
      if (voteArray[i] > voteArray[maxVoteIndex]) {
        maxVoteIndex = i;
      }
    }
    return maxVoteIndex;
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {voteArray[selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNextAnec} text="next anecdotes" />
      <hr />
      <h2>Anecdote with most votes</h2>
      {anecdotes[getMaxVoteIndex()]}
    </div>
  );
};

export default App;
