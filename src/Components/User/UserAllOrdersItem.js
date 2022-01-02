import React from "react";
import { Col, Row } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrdersItem = () => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">طلب رقم #234556</div>
      </Row>
      <UserAllOrderCard />
      <UserAllOrderCard />

      <Row className="d-flex justify-content-between">
        <Col xs="6" className="">
          <div>
            <div className="d-inline">الحالة</div>
            <div className="d-inline mx-2 stat">قيد التنفيذ</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">4000 جنيه</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrdersItem;
