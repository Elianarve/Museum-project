import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../components/Contact";
import Body from '../components/Body';


const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/body",
      element: <Body />,
    }
  ]);

export default router;
