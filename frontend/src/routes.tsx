import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
