import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      id={props.id}
      style={{
        border: "1px solid",
        margin: 16,
        padding: 16,
        textAlign: "center",
      }}
    >
      {console.log("Product", props.id, "rendering")}
      <img
        style={{ width: 210, height: 300, objectFit: "contain" }}
        src={props.image}
        alt={props.title}
      />
      <h3>{props.title}</h3>
      <h4>$ {props.price}</h4>
      <p>{props.description}</p>

      <button
        onClick={() => dispatch({ type: "add_to_cart", product: { ...props } })}
      >
        Add To Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Product;
