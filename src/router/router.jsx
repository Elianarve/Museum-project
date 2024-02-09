import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";


const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/about",
      element: <About />,
    }
  ]);

export default router;
