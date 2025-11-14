import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Annonce from "./pages/Annonce";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "annonce/:id", element: <Annonce /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);