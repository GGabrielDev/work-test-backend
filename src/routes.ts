import { GetAuthUser } from "./controller/GetAuthUser";
import { PostSignUpUser } from "./controller/PostSignUpUser";
import { PostSignInUser } from "./controller/PostSignInUser";
import { PostCreateCategory } from "./controller/PostCreateCategory";
import { GetCategories } from "./controller/GetCategories";
import { PutUpdateCategories } from "./controller/PutUpdateCategories";
import { DeleteCategory } from "./controller/DeleteCategory";
import { PostCreateProduct } from "./controller/PostCreateProduct";
import { GetProducts } from "./controller/GetProducts";
import requireAuth = require("./middlewares/requireAuth");
import emptyMiddleware = require("./middlewares/emptyMiddleware");

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
    middlewares: emptyMiddleware,
  },
  {
    path: "/user/signin",
    method: "post",
    action: PostSignInUser,
    middlewares: emptyMiddleware,
  },
  {
    path: "/categories",
    method: "post",
    action: PostCreateCategory,
    middlewares: emptyMiddleware,
  },
  {
    path: "/categories",
    method: "get",
    action: GetCategories,
    middlewares: emptyMiddleware,
  },
  {
    path: "/categories/:id",
    method: "put",
    action: PutUpdateCategories,
    middlewares: emptyMiddleware,
  },
  {
    path: "/categories/:id",
    method: "delete",
    action: DeleteCategory,
    middlewares: emptyMiddleware,
  },
  {
    path: "/products",
    method: "post",
    action: PostCreateProduct,
    middlewares: emptyMiddleware,
  },
  {
    path: "/products",
    method: "post",
    action: GetProducts,
    middlewares: emptyMiddleware,
  },
];
