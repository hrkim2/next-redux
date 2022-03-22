import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../store/modules/counter";
import * as sumActions from "../store/modules/sum";

export default function Test() {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }) => counter.value);
  const sumValue = useSelector(({ sum }) => sum.sum);
  const plus = useCallback(
    ({ value }) => {
      dispatch(counterActions.increment({ value }));
    },
    [dispatch]
  );
  const minus = useCallback(
    ({ value }) => {
      dispatch(counterActions.decrement({ value }));
    },
    [dispatch]
  );
  const twice = useCallback(
    ({ value }) => {
      dispatch(sumActions.increment({ value }));
    },
    [dispatch]
  );
  const divide = useCallback(
    ({ value }) => {
      dispatch(sumActions.decrement({ value }));
    },
    [dispatch]
  );

  return (
    <>
      <div key={0}>
        {" "}
        <h1>Counter</h1> <button onClick={() => minus({ value })}>-</button>{" "}
        <span>{value}</span> <button onClick={() => plus({ value })}>+</button>{" "}
      </div>
      <div key={0}>
        {" "}
        <h1>Sum</h1> <button onClick={() => divide({ sumValue })}>-</button>{" "}
        <span>{sumValue}</span>{" "}
        <button onClick={() => twice({ sumValue })}>+</button>{" "}
      </div>
    </>
  );
}
