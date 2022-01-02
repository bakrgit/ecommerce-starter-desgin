import React from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
const AdminAddProducts = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 ">
            <option value="val">التصنيف الاول</option>
            <option value="val2">التصنيف الثاني</option>
            <option value="val2">التصنيف الثالث</option>
            <option value="val2">التصنيف الرابع</option>
          </select>
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 ">
            <option value="val">الماركة</option>
            <option value="val2">التصنيف الماركة الاولي</option>
            <option value="val2">التصنيف الماركة الثانيه</option>
            <option value="val2">التصنيف الرابع</option>
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "#E52C2C" }}></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: "white" }}></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "black" }}></div>
            <img src={add} alt="" width="30px" height="35px" className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
