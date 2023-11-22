import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../app/reducers/counterSliceReducer";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <span> {count} </span>
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* ini */}
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>

      {/* sama dengan ini, karena function incrementByAmount(5) return type dan payload */}
      <button
        onClick={() =>
          dispatch({ type: "counter/incrementByAmount", payload: 5 })
        }
      >
        Increment by 5 manual type
      </button>
    </div>
  );
}
