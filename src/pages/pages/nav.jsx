import { Link } from "react-router-dom";
import { NavLi } from "../../components/navComponets";
import "../../assets/css/styles.home.css";

export function NavBar() {
  return (
    <nav id="Navbar" className="navbar navs navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
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
            <NavLi
              contenido={[
                "Inicio",
                "Repositorios",
                "Proyectos",
                "Contacto",
                "Spotify",
              ]}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
