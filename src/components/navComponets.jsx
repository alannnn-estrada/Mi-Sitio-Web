import { Link, useLocation, useNavigate } from "react-router-dom";
import scrolling from "../utils/scrolling";
export function NavLi({ contenido }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick(contenido) {
    if (location.pathname === "/") {
      navigate("/");
    } else {
      navigate("/Pagina-Web/");
    }
    setTimeout(() => {
      scrolling(contenido);
    }, 100);
  }
  return (
    <>
      {contenido && contenido.length > 0 ? (
        contenido.map((contenido, index) => (
          <li key={index} className="nav-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link" onClick={() => handleClick(contenido)}>
              {contenido}
            </a>
          </li>
        ))
      ) : (
        <li className="nav-item">Items no encontrados</li>
      )}
    </>
  );
}

export function NavDropdown({ contenido, link }) {
  return (
    <>
      <li className="nav-item dropdown">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Links de Proyectos
        </a>
        <ul
          className="dropdown-menu bg-dark text-primary"
          aria-labelledby="navbarDropdown"
        >
          {link && link.length > 0 ? (
            link.map((link, index) => (
              <NavDropdownComponent
                key={index}
                contenido={contenido[index]}
                link={link}
              />
            ))
          ) : (
            <li className="nav-item">Items no encontrados</li>
          )}
        </ul>
      </li>
    </>
  );
}
export function NavDropdownComponent({ contenido, link }) {
  return (
    <li>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link to={link} className="dropdown-item text-white">
        {contenido}
      </Link>
    </li>
  );
}
