import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <div style={{ width: "100%", position: "fixed", top: 0, right: 0 }}>
      <h1 style={{ float: "right", backgroundColor: "white" }}>
        Cart({cart.count}){console.log("Header Rendering")}
      </h1>
    </div>
  );
};

export default Header;
