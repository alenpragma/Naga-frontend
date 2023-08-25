import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layouts/Main";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/', element: <App />
        },
        {
            path: 'aboutUs', element: <AboutUs />
        },
        {
            path: 'contact', element: <Contact />
        },
      ]
    },
  ]);