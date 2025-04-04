import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    path: "/judodeploy/home",
    element: <Home />,
  },
  {
    path: "/judodeploy/maestri",
    element: <Maestri />,
  },
  {
    path: "/judodeploy/storia",
    element: <Storia />,
  },
  {
    path: "/judodeploy/corsi",
    element: <Corsi />,
  },
  {
    path: "/judodeploy/contatti",
    element: <Contatti />,
  },
  {
    path: "*",
    element: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
