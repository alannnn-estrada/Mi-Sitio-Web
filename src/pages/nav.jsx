import { NavDropdown, NavLi } from "../components/navComponets";
import { useLocation } from "react-router-dom";
import "../assets/css/styles_nav.css";

export function Nav() { 
  const locacion = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div className="logo">
              <p> &lt;/&gt; </p>
              <h3>Alann</h3>
              <h5>Estrada</h5>
            </div>
          </a>
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
              {locacion.pathname !== "/mantenimiento" && (
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
                link={["/", "/mantenimiento", "/herramientas"]}
              />
            </ul>
          </div>
        </div>
      </nav>
      {/* //componentes de la pagina //redirecciones */}
    </>
  );
}
