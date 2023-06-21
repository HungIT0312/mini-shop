import http from "../../helpers/http";

export const getAllProducts = () => {
  return http.get("/products/category/tops");
};
