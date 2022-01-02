import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

const CategorysHeader = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header">الكترونيات</div>
            <div className="cat-text-header">ملابس</div>
            <div className="cat-text-header"> كهربيه</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">المزيد</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorysHeader;
