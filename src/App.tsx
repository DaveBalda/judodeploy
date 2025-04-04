import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Maestri from "./pages/Maestri/Maestri";
import NotFound from "./pages/NotFound/NotFound";
import Storia from "./pages/Storia/Storia";
import Corsi from "./pages/Corsi/Corsi";
import Contatti from "./pages/Contatti/Contatti";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/maestri",
    element: <Maestri />,
  },
  {
    path: "/storia",
    element: <Storia />,
  },
  {
    path: "/corsi",
    element: <Corsi />,
  },
  {
    path: "/contatti",
    element: <Contatti />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
