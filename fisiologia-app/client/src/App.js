import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/NavBar/Nav";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
