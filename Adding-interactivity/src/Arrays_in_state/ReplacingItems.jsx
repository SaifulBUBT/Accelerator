import { useState } from "react";

let initialCounters = [0];

export default function ReplacingItems() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((newCounter, i) => {
      if (i === index) {
        return newCounter + 1;
      } else {
        return newCounter;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <>
      <h2>Counters:</h2>
      <ul>
        {counters.map((counter, index) => (
          <li key={index}>
            {counter}
            <button
              onClick={() => {
                handleIncrementClick(index);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
