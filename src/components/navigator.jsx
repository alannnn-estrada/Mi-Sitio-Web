import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { Index } from "../pages/home";
import { Mantenimiento } from "../pages/mantenimiento";
import { Frases } from "../pages/frases";
import { Especial } from "../pages/especial";
import { Herramientas } from "../pages/herramientas";
import { Nav } from "../pages/nav";
import { NavBar } from "../pages/pages/nav";
import { Home } from "../pages/pages";
import { ParticleBackground } from "./particles";

export function Navigator() {
  const location = useLocation();
  // eslint-disable-next-line
  const [maintenance, setMaintenance] = useState(true);
  return (
    <>
      {location.pathname === "/" ? (
        <>
          <ParticleBackground />
          <NavBar />
        </>
      ) : location.pathname === "/Pagina-Web/mantenimiento" ? (
        <>
          <ParticleBackground clase={"bg-particles-maintenance"} />
          <Nav />
        </>
      ) : (
        <>
          <Nav />
        </>
      )}
      <Routes>
        {maintenance ? (
          <>
            <Route path="/Pagina-Web/" element={<Index />} />
            <Route
              path="/Pagina-Web/mantenimiento"
              element={<Mantenimiento />}
            />
          </>
        ) : (
          <>
            <Route
              path="/Pagina-Web/"
              element={<Navigate to="/Pagina-Web/mantenimiento" />}
            />
            <Route
              path="/Pagina-Web/mantenimiento"
              element={<Mantenimiento />}
            />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/Pagina-Web/frases" element={<Frases />} />
        <Route
          path="/Pagina-Web/frases/especial/:string"
          element={<Especial />}
        />
        <Route path="/Pagina-Web/herramientas" element={<Herramientas />} />
      </Routes>
    </>
  );
}
