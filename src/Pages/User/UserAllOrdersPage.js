import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserAllOrders from "../../Components/User/UserAllOrders";
import UserSideBar from "../../Components/User/UserSideBar";

const UserAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAllOrders/>
        </Col>
      </Row>
    </Container>
  );
};

export default UserAllOrdersPage;
