import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Nav from "./components/NavBar/Nav";
import Register from "./components/Register/Register";
import Form from "./components/Form/Form";
import Perfil from "./components/Perfil/Perfil";


function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />}></Route>
          <Route element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="form" element={<Form/>}></Route>
          <Route path="detail" element={<Detail />} />
          <Route path="inicio" element={<Cards />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="Perfil" element={<Perfil />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
