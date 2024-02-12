import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from '../pages/Gallery';
import Form from "../pages/Form";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/form",
      element: <Form />,

    }
  
  ]);

export default router;
