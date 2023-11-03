import { NavDropdown, NavLi } from "../components/navComponets";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/styles_nav.css";

export function Nav() {
  const locacion = useLocation();
  return (
    <>
      <nav id="Navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/Pagina-Web" className="navbar-brand">
            <div className="logo">
              <p> &lt;/&gt; </p>
              <h3>Alann</h3>
              <h5>Estrada</h5>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {locacion.pathname !== "/Pagina-Web/mantenimiento" && (
                <>
                  <NavLi
                    contenido={[
                      "Sobre-Mi",
                      "Tecnologias",
                      "Proyectos",
                      "Contacto",
                    ]}
                  />
                </>
              )}
              <NavDropdown
                contenido={["Index", "Mantenimiento", "Herramientas"]}
                link={[
                  "/Pagina-Web/",
                  "/Pagina-Web/mantenimiento",
                  "/Pagina-Web/herramientas",
                ]}
              />
            </ul>
          </div>
        </div>
      </nav>
      {/* //componentes de la pagina //redirecciones */}
    </>
  );
}
