import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SkillDetails from "../Pages/SkillDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/skill/:id",
        Component: SkillDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
