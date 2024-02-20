import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import LayoutPublic from "../layout/LayoutPublic";
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import CreatedAnimal from "../pages/CreatedAnimal";
import UpdateAnimal from "../pages/UpdateAnimal";
import Details from '../components/Details';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic />,
      children: [
        {
          index: true,
          element: <Home />, 
        },
        {
        path: "/gallery",
        element: <Gallery />, 
        }, 
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/form",
          element: <CreatedAnimal />,
        },
        {
          path: "/update/:id",
          element: <UpdateAnimal />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        }
      ]
    },
]);
  
export default router;
