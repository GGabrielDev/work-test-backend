import { GetAuthUser } from "./controller/GetAuthUser";
import { PostSignUpUser } from "./controller/PostSignUpUser";
import { PostSignInUser } from "./controller/PostSignInUser";
import requireAuth = require("./middlewares/requireAuth");

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
    middlewares: "",
  },
  {
    path: "/user/signin",
    method: "post",
    action: PostSignInUser,
    middlewares: "",
  },
];
