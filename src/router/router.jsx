import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Nav from "../components/Nav"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/nav",
      element: <Nav />,
    },
  ]);

export default router;
