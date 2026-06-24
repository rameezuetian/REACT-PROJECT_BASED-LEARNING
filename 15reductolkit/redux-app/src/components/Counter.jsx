import { increment, decrement, reset } from "../features/counter/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}


export default Counter;