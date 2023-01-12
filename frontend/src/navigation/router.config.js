import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Users } from "../pages/Users";

export const routing = [
  {
    path: "/",
    page: Home,
  },
  {
    path: "/profile/:username",
    page: Profile,
  },
  {
    path: "/users",
    page: Users,
  },
];
