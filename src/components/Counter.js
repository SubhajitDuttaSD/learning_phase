import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector((state) => state);

  const handleToggle = () => {
    dispatch(counterActions.toggle());
  };

  const handleIncrement = (value) => {
    dispatch(counterActions.increment(value));
  };

  const handleDecrement = (value) => {
    dispatch(counterActions.decrement(value));
  };

  return (
    <div>
      Counter Component
      <h1>Redux Counter</h1>
      {showCounter && <h2>Counter Value ------ {counter}</h2>}
      <div>
        <button
          onClick={() => {
            handleIncrement(1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            handleIncrement(5);
          }}
        >
          Increment by 5
        </button>
        <button
          onClick={() => {
            handleDecrement(1);
          }}
        >
          Decrement
        </button>
      </div>
      <button onClick={handleToggle}>Toggle Counter</button>
    </div>
  );
};

export default Counter;
