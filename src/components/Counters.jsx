import React, { useState, useEffect } from "react";

// create function component for counters, specify props needed for the counter
function Counter({ id, name }) {
  // define useState for counter value to start from local storage or 0
  const [counter, setCounter] = useState(() => {
    // parse the storage into a number so it can update by increment when storing
    return parseInt(localStorage.getItem(`counter_${id}`)) || 0;
  }); //counter_${id} defines which counter state is updated

  // monitor changes in local state to initialise the state correctly
  useEffect(() => {
    localStorage.setItem(`counter_${id}`, counter);
  }, [counter, id]);

  // create function to handle counter increase
  const handleAdd = () => {
    // set counter based on the previous counter state
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      // update local storage imediately when the state changes
      localStorage.setItem(`counter_${id}`, newCounter);
      return newCounter;
    });
  };
  // create function to handle counter decrease
  const handleSub = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter >= 1 ? prevCounter - 1 : 0;
      localStorage.setItem(`counter_${id}`, newCounter);
      return newCounter;
    });
  };

  // function to reset counter to 0 and clear local storage to default value
  const handleReset = () => {
    setCounter(0);
    // do not use clear as it will clear all local storage items
    // instead use specific ounter id to remove the counter and return to default value
    localStorage.removeItem(`counter_${id}`);
  };

  return (
    // define component contents
    <>
      {/* display current counter value */}
      <div className="count-value">{counter}</div>
      {/* set up control buttons to add, reset and subtract counter values */}
      <div className="count-control">
        {/* add */}
        <button type="button" className="plus-btn btn btn-default btn-active" onClick={handleAdd}>
          <span>+</span>
        </button>
        {/* reset */}
        <button
          type="button"
          className="reset-btn btn btn-default btn-active"
          onClick={handleReset}
        >
          <span>Reset</span>
        </button>
        {/* subtract */}
        <button type="button" className="minus-btn btn btn-default btn-active" onClick={handleSub}>
          <span>-</span>
        </button>
      </div>
    </>
  );
}

export default Counter;
