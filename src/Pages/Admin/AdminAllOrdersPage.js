import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllOrder from "../../Components/Admin/AdminAllOrder";
import PaginationCompontent from "../../Components/Utility/Pagination";
const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllOrder />
          <PaginationCompontent />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllOrdersPage;
