import { GetAuthUser } from "./controller/GetAuthUser";
import { PostSignUpUser } from "./controller/PostSignUpUser";
import { PostSignInUser } from "./controller/PostSignInUser";
import { PostCreateCategory } from "./controller/PostCreateCategory";
import { GetCategories } from "./controller/GetCategories";
import { PutUpdateCategories } from "./controller/PutUpdateCategories";
import { DeleteCategory } from "./controller/DeleteCategory";
import { PostCreateProduct } from "./controller/PostCreateProduct";
import { GetProducts } from "./controller/GetProducts";
import { GetProductsByCategory } from "./controller/GetProductsByCategory";
import requireAuth = require("./middlewares/requireAuth");
import { PutUpdateProducts } from "./controller/PutUpdateProducts";

export const AppRoutes = [
  {
    path: "/",
    method: "get",
    action: GetAuthUser,
    middlewares: requireAuth,
  },
  {
    path: "/user/signup",
    method: "post",
    action: PostSignUpUser,
  },
  {
    path: "/user/signin",
    method: "post",
    action: PostSignInUser,
  },
  {
    path: "/categories",
    method: "post",
    action: PostCreateCategory,
  },
  {
    path: "/categories",
    method: "get",
    action: GetCategories,
  },
  {
    path: "/categories/:id",
    method: "put",
    action: PutUpdateCategories,
  },
  {
    path: "/categories/:id",
    method: "delete",
    action: DeleteCategory,
  },
  {
    path: "/products",
    method: "post",
    action: PostCreateProduct,
  },
  {
    path: "/products",
    method: "post",
    action: GetProducts,
  },
  {
    path: "/products/:categoryId",
    method: "get",
    action: GetProductsByCategory,
  },
  {
    path: "/products/:id",
    method: "put",
    action: PutUpdateProducts,
  },
];
