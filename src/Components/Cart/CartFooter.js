import React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartFooter = () => {
  return (
    <Row className="my-3 d-flex justify-content-between">
      <Col xs="6" className="d-flex  ">
        <input
          className="copon-input d-inline text-center"
          placeholder="ادخل كود الخصم"
        />
        <button className="copon-btn d-inline">تطبيق</button>
      </Col>

      <Col xs="6" className="d-flex justify-content-end">
        <div className="product-price d-inline   border">34000 جنية</div>
        <Link
          to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline me-2">
          <button className="product-cart-add px-2" > اتمام الشراء</button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartFooter;
