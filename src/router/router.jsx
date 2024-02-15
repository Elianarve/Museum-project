import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import CreatedAnimal from "../pages/CreatedAnimal";
// import FormEdit from '../pages/EditAnimal'


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
      path: "/about",
      element: <About />,
    },
    {
      path: "/form",
      element: <CreatedAnimal />,
    }
    //,
    // {
    //   path: "/edit/:id",
    //   element: <FormEdit/>,
    // }
  ]);

export default router;
