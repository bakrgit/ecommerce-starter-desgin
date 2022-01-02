import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddProducts from "../../Components/Admin/AdminAddProducts";

const AdminAddProductsPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddProducts />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddProductsPage
