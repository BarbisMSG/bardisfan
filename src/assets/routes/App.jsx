import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../container/Home";
import Deslogueado from "../components/Deslogueado";
import Logueado from "../components/Logueado";
import UsarContexto from "../context/UsarContexto";

function App() {
  return (
    <>
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/deslogueado" element={<Deslogueado />}></Route>
              <Route path="/logueado" element={<Logueado />}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
