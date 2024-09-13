//import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:5000/book/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch book");
            }
            return response.json();
          } catch (error) {
            console.error(error);
            throw new Response("Failed to fetch book", {
              status: 500,
              statusText: error.message,
            });
          }
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: "upload", element: <UploadBook /> },
      { path: "manage", element: <ManageBooks /> },
      {
        path: "edit-books/:id",
        element: <EditBooks />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:5000/book/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch book");
            }
            return response.json();
          } catch (error) {
            console.error(error);
            throw new Response("Failed to fetch book", {
              status: 500,
              statusText: error.message,
            });
          }
        },
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

export default router;
