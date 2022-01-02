import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProducsCard from "./AdminAllProducsCard";
const AdminAllProducts = () => {
  return (
    <div>
      <div className="admin-content-text">اداره جميع المنتجات</div>
      <Row className="justify-content-center ">
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
      </Row>
    </div>
  );
};

export default AdminAllProducts;
