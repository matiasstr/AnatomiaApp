import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Nav from "./components/NavBar/Nav";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />}></Route>
        
          <Route element={<Home />} />
          <Route path="inicio" element={<Cards />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route></Route>
        
      </Routes>
    </div>
  );
}

export default App;
