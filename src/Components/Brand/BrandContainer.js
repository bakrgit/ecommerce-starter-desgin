import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
const BrandContainer = () => {
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className="my-1 justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
