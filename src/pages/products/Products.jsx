import React, { useEffect } from "react";
import { getAllProducts } from "../../api/products/GetAll";

const Products = () => {
  useEffect(() => {
    const _getAllProducts = async () => {
      const res = await getAllProducts();
      console.log(res);
    };
    _getAllProducts();
    return () => {};
  }, []);

  return <div>Products</div>;
};

export default Products;
