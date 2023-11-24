import img_github from "../../assets/img/SOY YO DE NUEVOXDD.jpg";
import { Links } from "../../components/components/links";
export function Home() {
  return (
    <>
      <div id="Inicio" className="container mt-2 text-center">
        <div className="text-center">
          <a href="https://github.com/alannnn-estrada">
            <img
              src={img_github}
              alt="FOTO DEL CREADOR"
              height="auto"
              width="260"
              className="img-fluid rounded-circle mb-4"
            />
          </a>
          <h4 className="text-center text-color mb-4">Alann Estrada</h4>
          <p className="text-center text-color">
            Enérgico desarrollador apasionado por los videojuegos, la
            programación e inteligencias artificiales. Con un alto compromiso de
            responsabilidad en cada proyecto, busco constantemente innovar y
            encontrar soluciones óptimas para abordar desafíos. Siempre
            dispuesto a dar lo mejor de mí en cada línea de código y en cada
            paso hacia el futuro tecnológico.{" "}
          </p>
        </div>
        <div id="Repositorios" className="container py-3 text-center">
          <h3 className="text-center text-color">
            Algunos de mis repositorios en GITHUB:
          </h3>
          <p className="text-center text-success">
            "Te recomiendo visitar los repositorios con ⭐ ya que son los mas
            recientes o se mantienen actualizados constantemente :D."
          </p>
          <div className="repositorios">
            <Links
              link={[
                "https://github.com/alannnn-estrada/Pagina-Web-Responsiva",
                "https://github.com/alannnn-estrada/Python-BG-Remove",
                "https://github.com/alann-estrada/To-Do-Task-App_FRONTEND",
                "https://github.com/alann-estrada/proyecto-fasdatec",
                "https://github.com/alann-estrada/dual-projects-fasdatec",
                "https://github.com/alann-estrada/API-COLORS",
                "https://github.com/alannnn-estrada/Graficas-TESCH",
                "https://github.com/alann-estrada/React-Native-Basic-App",
                "https://github.com/alann-estrada/Pomodoro-React-Native",
              ]}
              contenido={[
                "Pagina Web Responsiva",
                "Python-BG-Remove",
                "To-Do-Task-App (Frontend)",
                "Proyecto Fasdatec",
                "Dual Projects (Fasdatec)",
                "API-COLORS",
                "Graficas-TESCH",
                "React-Native-Basic-App",
                "Pomodoro React Native App",
              ]}
              visibilidad={[
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
              ]}
              recomendado={[
                true,
                true,
                true,
                true,
                true,
                true,
                false,
                false,
                false,
              ]}
              tipo={[""]}
            />
          </div>
        </div>
        <div className="text-color text-center" id="Proyectos">
          <h3 className="mb-4">Proyectos Web</h3>
          <Links
            link={[
              "https://vercel.com/alann-estrada/proyecto-fasdatec",
              "https://vercel.com/alann-estrada/dual-projects-fasdatec",
              "https://mi-sitio-web-alannnn-estradas-projects.vercel.app/Pagina-Web/",
              "https://cecytemixp2.000webhostapp.com/",
            ]}
            contenido={[
              "Proyecto Fasdatec",
              "Dual Projects (Fasdatec)",
              "Pagina Web Responsiva",
              "CECYTEM Pagina Web",
            ]}
            visibilidad={[false]}
            recomendado={[true, true, false, false]}
            tipo={[""]}
          />
        </div>
        <div className="text-color text-center" id="Contacto">
          <h3 className="m-3">Mis redes sociales / medios de contacto:</h3>
          <Links
            link={[
              "https://www.instagram.com/https_alann.estrada/",
              "https://www.threads.net/@https_alann.estrada",
              "https://www.facebook.com/alann.estrada.10",
              "https://github.com/alannnn-estrada",
            ]}
            contenido={["Instagram", "Threads", "Facebook", "Github"]}
            visibilidad={[false, false, false, false]}
            recomendado={[false, false, false, false]}
            tipo={["Instagram", "Threads", "Facebook", "Github"]}
          />
        </div>
        <div className="mt-4 mb-4 text-color text-center" id="Spotify">
          <h3>Link de mis playlist en Spotify:</h3>
          <Links
            link={[
              "https://open.spotify.com/embed/playlist/2dgMZ2q9KgajuPjRXzqzgX?utm_source=generator",
              "https://open.spotify.com/embed/playlist/2aepxluSYLkIgXymloieZt?utm_source=generator",
              "https://open.spotify.com/embed/playlist/3bnhOli5Xig2MygUzkpbaO?utm_source=generator",
              "https://open.spotify.com/embed/playlist/2xs3CUvqLPORYIzfMHca3E?utm_source=generator",
              "https://open.spotify.com/embed/playlist/39ySqqEgutUBGnFtvw7qtB?utm_source=generator",
            ]}
            contenido={[
              "MÚSICA PA LA CHAMBA",
              "Música para una carne asada y peda xD",
              "Musica Para Jugar Rocket League O Algo Asi",
              "Musica para fiestas así para bailar bien chido con tu tía la borracha",
              "Música Para Ambientar Antes Del Show",
            ]}
            visibilidad={[false, false, false, false, false]}
            recomendado={[true, true, false, false, false]}
            tipo={["Spotify", "Spotify", "Spotify", "Spotify", "Spotify"]}
            spotifyPlay={true}
          />
        </div>
        <footer
          id="footer"
          className="pie-pagina text-center bg-color text-md-left bg-dark text-white"
        >
          <div className="container">
            <p className="m-0 py-3">
              <a
                className="f-link"
                href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Falannnn-estrada"
              >
                &copy; Sigueme si te interesa saber un poco de mi.
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
