import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductsText from "./ProductsText";
const ProductDetails = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col lg="4"  className="">
          <ProductGallery />
        </Col>
        <Col lg="8" className="">
          <ProductsText />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
