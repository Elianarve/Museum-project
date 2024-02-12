import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from '../pages/Gallery';
import CreatedAnimal from '../pages/CreatedAnimal';

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
      path: "/created",
      element: <CreatedAnimal />,
    }
  ]);

export default router;
