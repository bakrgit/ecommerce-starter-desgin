import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartFooter from "../../Components/Cart/CartFooter";
const CartPage = () => {
  return (
    <Container className="" style={{ minHeight: "680px" }}>
      <Row>
        <div className="cart-title mt-4">عربه التسوق</div>
      </Row>
      <Row>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartFooter />
      </Row>
    </Container>
  );
};

export default CartPage;
