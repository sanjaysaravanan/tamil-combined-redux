import { useDispatch, useSelector } from "react-redux";

const Movement = () => {
  const pos = useSelector((state) => state.movementReducer);

  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          height: "300px",
          width: "300px",
          border: "1px solid",
          position: "relative",
        }}
      >
        {console.log("Movement Rendering")}
        <div
          style={{
            top: pos.top,
            left: pos.left,
            height: 100,
            width: 100,
            backgroundColor: "blue",
            position: "absolute",
            transition: "all 500ms ease",
          }}
        ></div>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "up" })}>Top</button>
        <button onClick={() => dispatch({ type: "down" })}>Bottom</button>
        <button onClick={() => dispatch({ type: "left" })}>Left</button>
        <button onClick={() => dispatch({ type: "right" })}>Right</button>
        <br />
        <button onClick={() => dispatch({ type: "reset_movement" })}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Movement;
