import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "typeface-roboto";
import React, { useState } from "react";
import { Index } from "./pages/home";
import { Mantenimiento } from "./pages/mantenimiento";
import { Frases } from "./pages/frases";
import { Especial } from "./pages/especial";
import { Herramientas } from "./pages/herramientas";
import { Nav } from "./pages/nav";
import "./assets/css/styles_global.css";
function App() {
  // eslint-disable-next-line
  const [maintenance, setMaintenance] = useState(true);
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          {maintenance ? (
            <>
              <Route path="/" element={<Index />} />
              <Route path="/mantenimiento" element={<Mantenimiento />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/mantenimiento" />} />
              <Route path="/mantenimiento" element={<Mantenimiento />} />
            </>
          )}
          <Route path="/frases" element={<Frases />} />
          <Route path="/frases/especial/:string" element={<Especial />} />
          <Route path="/herramientas" element={<Herramientas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
