import { PostSignUpUser } from "./controller/PostSignUpUser";
import { PostSignInUser } from "./controller/PostSignInUser";

export const AppRoutes = [
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
];
