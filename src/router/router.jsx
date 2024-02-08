import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Body from '../components/Body';
import Nav from '../components/Nav';


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
      path: "/body",
      element: <Body />,
    },
    {
      path: "/nav",
      element: <Nav />,
    }
  ]);

export default router;
