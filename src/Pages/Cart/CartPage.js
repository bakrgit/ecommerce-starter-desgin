import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
const CartPage = () => {
  return (
    <Container className="" style={{ minHeight: "680px" }}>
      <Row>
        <div className="cart-title mt-4">عربه التسوق</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col xs="6" md="3" >
          <CartCheckout />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
