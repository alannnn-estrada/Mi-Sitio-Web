import git_repositorios from "../../assets/img/LIBRO-ICON.png";
import instagram from "../../assets/img/instagram-bn.png";
import threads from "../../assets/img/threads.png";
import spotify from "../../assets/img/spotify.png";
import facebook from "../../assets/img/facebook.png";
import github from "../../assets/img/github-icon.png";
import { useState } from "react";

export function Links({
  link,
  contenido,
  visibilidad,
  recomendado,
  tipo,
  spotifyPlay,
}) {
  const tipoImagenes = {
    Spotify: spotify,
    Instagram: instagram,
    Threads: threads,
    Facebook: facebook,
    Github: github,
  };

  const contenidoCopy = contenido
    .map((item, index) => ({
      contenido: item,
      visibilidad: visibilidad[index],
      recomendado: recomendado[index],
      tipo: tipo[index],
      imagen: tipoImagenes[tipo[index]] || git_repositorios,
      link: link[index],
    }))
    .sort((a, b) => {
      if (a.recomendado && !b.recomendado) return -1;
      if (!a.recomendado && b.recomendado) return 1;
      return 0;
    });

  const [expandedLink, setExpandedLink] = useState(null);

  const handleExpand = (index) => {
    setExpandedLink(expandedLink === index ? null : index);
  };
  // eslint-disable-next-line
  return (
    <>
      {contenidoCopy.length > 0 ? (
        contenidoCopy.map((item, index) => {
          const imagen = tipoImagenes[tipo[index]] || git_repositorios;
          const isExpanded = expandedLink === index;
          return (
            <>
              <div
                key={index}
                className="m-3 d-grid gap-2 col-sm-12 col-lg-6 mx-auto bg-dark text-width bg-color"
              >
                {spotifyPlay ? (
                  <>
                    {/* eslint-disable-next-line */}
                    <a
                      onClick={() => handleExpand(index)}
                      className={`btn btn-outline-secondary p-3${
                        isExpanded ? " expanded" : ""
                      }`}
                    >
                      <img
                        src={imagen}
                        width="20"
                        height="20"
                        className="img-fluid img-bn"
                        align="left"
                        alt="Imagen Red Social"
                      />{" "}
                      {contenido[index]} {recomendado[index] ? "⭐" : ""}
                      <span className="badge rounded-pill text-bg-dark">
                        {visibilidad[index] ? "Publico" : "Dale Click"}
                      </span>
                    </a>
                    {isExpanded && spotifyPlay && (
                      <>
                        <iframe
                          title="Reproductor"
                          style={{ borderRadius: "12px" }}
                          src={parseSpotifyURL(link[index])}
                          width="100%"
                          height="352"
                          frameBorder="0"
                          allowfullscreen=""
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                        />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <a
                      href={link[index]}
                      className="btn btn-outline-secondary p-3"
                    >
                      <img
                        src={imagen}
                        width="20"
                        height="20"
                        className="img-fluid img-bn"
                        align="left"
                        alt="Imagen Red Social"
                      />{" "}
                      {contenido[index]} {recomendado[index] ? "⭐" : ""}
                      <span className="badge rounded-pill text-bg-dark">
                        {visibilidad[index] ? "Publico" : "Dale Click"}
                      </span>
                    </a>
                  </>
                )}
              </div>
            </>
          );
        })
      ) : (
        <>
          <p>No hay links que mostar</p>
        </>
      )}
    </>
  );
}

function parseSpotifyURL(url) {
  // Extraer el ID de la lista de reproducción de una URL de Spotify
  const matches = url.match(/playlist\/(\w+)/);
  if (matches) {
    const playlistId = matches[1];
    return `https://open.spotify.com/embed/playlist/${playlistId}`;
  }
  return url; // Devolver la URL original si no se pudo analizar
}
