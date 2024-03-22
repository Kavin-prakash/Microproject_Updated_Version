import React from "react";
import "./Petproduct.css";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { cartContext } from "../App";

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
//   const name =
//     product.title.length > 21
//       ? product.title.substring(0, 20) + ".."
//       : product.title;

  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };
  return (
    <>
    
    <Card style={{ width: "18rem" }} className="mt-4">
      <Card.Img className="card-img" variant="top" src={product.imageUrl} />
      <Card.Body>
        {/* <Card.Title>{name}</Card.Title> */}
        {/* <p>Pet Name :{product.petaccessoryname}</p> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {cart.includes(product) ? (
          <Button
            className="btn btn-danger"
            variant="primary"
            onClick={removeCart}
          >
            Remove Cart
          </Button>
        ) : (
          <Button
            className="btn btn-primary"
            variant="primary"
            onClick={addCart}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
    </>
  );
};
