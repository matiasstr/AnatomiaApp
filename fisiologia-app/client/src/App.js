import { Routes, Route } from "react-router-dom";
// import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Nav from "./components/NavBar/Nav";
import Register from "./components/Register/Register";
import Form from "./components/Form/Form";

import Suscripcion from "./components/Suscripcion/Suscripcion";
import Perfil from "./components/Perfil/Perfil";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />}></Route>
          <Route element={<Home />} />
          <Route path="inicio" element={<Home />} />

          <Route path="Suscripcion" element={<Suscripcion />} />
          <Route path="form" element={<Form/>}></Route>
          <Route path="detail/:id" element={<Detail />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="Perfil" element={<Perfil />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
