import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import PaginationCompontent from "../Utility/Pagination";

const UserFavoriteProduct = () => {
  return (
    <Row className="justify-content-between ">
      <div className="admin-content-text">المنتجات المفضله</div>
      <Row className="justify-content-between ">
        <ProductCard title="1" />
        <ProductCard title="2" />
        <ProductCard title="3" />
        <ProductCard title="4" />
        <ProductCard title="4" />
        <ProductCard title="4" />
        <ProductCard title="4" />
        <ProductCard title="4" />
        <PaginationCompontent />
      </Row>
    </Row>
  );
};

export default UserFavoriteProduct;
