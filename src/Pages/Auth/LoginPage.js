import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل الدخول</label>
          <input
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button className="btn-login mx-auto mt-4">تسجيل الدخول</button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <label className="mx-auto text-center">الدخول بحساب الادمن</label>
          </Link>
          <Link to="/user/allOrders" style={{ textDecoration: "none" }}>
            <label className="mx-auto text-center">الدخول بحساب المستخدم</label>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
