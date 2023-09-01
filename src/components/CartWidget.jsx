import React, { useContext } from "react";
import cart from "../assets/cart.svg";
import Badge from "react-bootstrap/Badge";
import { CartContext } from "../Context/CartContext";


export const CartWidget = () => {
  const {agregadoAlCart} = useContext(CartContext);
    return (
      <span>
        <img src={cart} width={40} />
        <Badge bg="success"> {agregadoAlCart()} </Badge>
      </span>
)};