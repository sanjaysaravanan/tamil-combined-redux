import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.countReducer);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      {console.log("Counter Rendering")}
      <button onClick={() => dispatch({ type: "inc_counter" })}>Inc</button>
      <button onClick={() => dispatch({ type: "dec_counter" })}>Dec</button>
      <button onClick={() => dispatch({ type: "reset_counter" })}>Reset</button>
    </div>
  );
};

export default Counter;
