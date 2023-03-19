import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Ph from "../components/pH/pH";
import Umidade from "../components/Umidade/Umidade";
import Luminosidade from "../components/Luminosidade/Luminosidade";
import Temperatura from "../components/Temperatura/Temperatura";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/ph",
    element: <Ph/>,
  },
  {
    path: "/umidade",
    element: <Umidade/>,
  },
  {
    path: "/luminosidade",
    element: <Luminosidade/>,
  },
  {
    path: "/temperatura",
    element: <Temperatura/>,
  },
]);
export default router;
