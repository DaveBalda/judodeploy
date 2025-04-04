import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Maestri from "./pages/Maestri/Maestri";
import NotFound from "./pages/NotFound/NotFound";
import Storia from "./pages/Storia/Storia";
import Corsi from "./pages/Corsi/Corsi";
import Contatti from "./pages/Contatti/Contatti";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
  {
    path: "/maestri",
    element: <Maestri />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
  {
    path: "/storia",
    element: <Storia />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
  {
    path: "/corsi",
    element: <Corsi />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
  {
    path: "/contatti",
    element: <Contatti />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
