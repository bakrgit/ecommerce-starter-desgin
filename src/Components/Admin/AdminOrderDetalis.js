import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";

const AdminOrderDetalis = () => {
  return (
    <div>
      <div className="admin-content-text">تفاصيل الطلب رقم #231231</div>
      <CartItem />
      <CartItem />

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
            الاسم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2">
            احمد عبداللة
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2">
            0021313432423
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
            الايميل:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2">
            ahmed@gmail.com
          </div>
        </Col>
      </Row>

      <Row className="my-3 justify-content-center ">
        <Col xs="12">
          <div className="product-price d-inline px-4 border">
            المجموع ٤٠٠٠ جنيه
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminOrderDetalis;
