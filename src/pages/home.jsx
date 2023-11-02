import img_github from "../assets/img/SOY YO DE NUEVOXDD.jpg";
import { Cards } from "../components/cards";
import Tecnologias from "../components/technologies";
import RedesS from "../components/redes";
import "../assets/css/styles_index.css";
import "../assets/css/styles_start.css";
export function Index() {
  return (
    <>
      <div className="stars" aria-hidden="true"></div>
      <div className="stars2" aria-hidden="true"></div>
      <div className="stars3" aria-hidden="true"></div>
      <main className="container main">
        <section id="Sobre-Mi" className="">
          <div className="sobre-mi-1 m-auto text-center mb-2">
            <a
              href="https://github.com/alannnn-estrada"
              className="text-center m-auto"
            >
              <img
                className="img_github"
                src={img_github}
                alt="Imagen de Perfil GitHub"
              />
            </a>
          </div>
          <div className="sobre-mi-2 m-auto text-center">
            <h4 className="">Sobre Mi</h4>
            <p>
              Enérgico desarrollador apasionado por los videojuegos, la
              programación e inteligencias artificiales. Con un alto compromiso
              de responsabilidad en cada proyecto, busco constantemente innovar
              y encontrar soluciones óptimas para abordar desafíos. Siempre
              dispuesto a dar lo mejor de mí en cada línea de código y en cada
              paso hacia el futuro tecnológico.
            </p>
          </div>
        </section>
        <section id="Tecnologias" className="mt-4">
          <div className="tecnologias-1 text-center mx-2">
            <h4>Tecnologias</h4>
            <p>
              Bienvenido al apartado de tecnologías en mi mundo digital. Aquí
              podrás explorar las herramientas y tecnologías que forman la base
              de mis proyectos y pasiones. Desde la creación de sitios web
              dinámicos hasta la implementación de funcionalidades interactivas,
              estas tecnologías son las piezas fundamentales que dan vida a mis
              ideas.
            </p>
            <p>Algunas de las tecnologias que puedo manejar son:</p>
            <Tecnologias
              lenguaje={[
                "HTML",
                "CSS",
                "SASS",
                "JAVASCRIPT",
                "PHP",
                "SQL",
                "REACT",
                "REACT NATIVE",
                "JAVA",
                "GIT",
                "C++",
                "PYTHON",
              ]}
            />
          </div>
          <div className="tecnologias-2">
            <img
              className="tecnologias-img"
              src="https://media0.giphy.com/media/WFZvB7VIXBgiz3oDXE/giphy.gif"
              alt="Tecnologias"
            />
          </div>
        </section>
        <section id="Proyectos" className="text-center mb-4">
          <h4>Proyectos</h4>
          <p className="mb-5">
            Bienvenido al apartado de tecnologías en mi mundo digital. Aquí
            podrás explorar las herramientas y tecnologías que forman la base de
            mis proyectos y pasiones. Desde la creación de sitios web dinámicos
            hasta la implementación de funcionalidades interactivas, estas
            tecnologías son las piezas fundamentales que dan vida a mis ideas.
          </p>
          <div className="cards">
            <Cards
              nombre_proyecto="Pagina de enlaces"
              informacion="Link to my personal website
Language: HTML, CSS and JS"
              link="https://alannnn-estrada.github.io/"
            />
            <Cards
              nombre_proyecto="Pagina-Web-Responsiva"
              informacion="My personal website, hosted right here on GitHub."
              link="https://alannnn-estrada.github.io/Pagina-Web-Responsiva"
            />

            <Cards
              nombre_proyecto="Projects CodePen"
              informacion="Here you will find some CSS and JS ideas of mine or replicated from some social network"
              link="https://codepen.io/alannnn-estrada"
            />

            <Cards
              nombre_proyecto="CECYTEM Pagina Web"
              informacion="Developed in: HTML, CSS, JS, PHP, MYSQL
Technologies used: BOOTSTRAP"
              link="https://proyecto-fasdatec.vercel.app/"
            />

            <Cards
              nombre_proyecto="Fasdatec Project"
              informacion="Developed in: JavaScript
Technologies used: ReactJS and SASS"
              link="https://proyecto-fasdatec.vercel.app/"
            />

            <Cards
              nombre_proyecto="Dual Projects (Fasdatec)"
              informacion="Developed in: JavaScript
Firebase implementation
Technologies used: ReactJS and SASS"
              link="https://dual-projects-fasdatec.vercel.app/"
            />

            <Cards
              nombre_proyecto="API COLORS"
              informacion="Developed in: JavaScript
Technologies used: Express"
              link="https://github.com/alann-estrada/API-COLORS"
            />

            <Cards
              nombre_proyecto="React-Native-Basic-App"
              informacion="Developed in: JavaScript
Technologies used: React Native"
              link="https://github.com/alann-estrada/Pomodoro-React-Native"
            />

            <Cards
              nombre_proyecto="Pomodoro React Native"
              informacion="Developed in: JavaScript
Technologies used: React Native"
              link="https://github.com/alann-estrada/Pomodoro-React-Native"
            />

            <Cards
              nombre_proyecto="To-Do-Task-App (Frontend)"
              informacion="Developed in: JavaScript
Technologies used: ReactJS"
              link="https://github.com/alann-estrada/To-Do-Task-App_FRONTEND"
            />

            <Cards
              nombre_proyecto="To-Do-Task-App (Backend)"
              informacion="Developed in: JavaScript
Technologies used: Express, MySQL"
              link="https://github.com/alann-estrada/To-Do-Task-App_BACKEND"
            />

            <Cards
              nombre_proyecto="Graficas-TESCH"
              informacion=" An example of bar charts created in HTML using PHP and CSS. It's a simple project showcasing data visualization techniques.
Language: HTML, CSS, JS, PHP and MYSQL"
              link="https://github.com/alannnn-estrada/Graficas-TESCH"
            />
            <Cards
              nombre_proyecto="Python-BG-Remove"
              informacion="Python graphical application for background removal in images using rembg.
Language: Python"
              link="https://github.com/alannnn-estrada/Python-BG-Remove"
            />
            <Cards
              nombre_proyecto="NERVELECTRODOMESTICOS-PROYECT-POO-POE"
              informacion="An open-source project focused on inventory management using Java and Object-Oriented Programming (OOP)
Language: Java and MYSQL"
              link="https://github.com/alannnn-estrada/NERVELECTRODOMESTICOS-PROYECT-POO-POE"
            />
          </div>
        </section>
        <section id="Contacto" className="text-center">
          <h4>Contactame</h4>
          <aside className="contacto_aside">
            <div className="contacto_div">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="text-center m-1"
                href="https://alannnn-estrada.github.io"
              >
                @alannnn-estrada
              </a>
              <div className="contacto_div_links">
                <RedesS
                  red_social={["Instagram", "Facebook", "Twitter", "GitHub"]}
                  href={[
                    "https://www.instagram.com/https_alann.estrada/",
                    "https://www.facebook.com/alann.estrada.10",
                    "https://github.com/alannnn-estrada",
                  ]}
                  src={[
                    "https://th.bing.com/th/id/R.4af42c87858bf65a60f6632aaf366a2f?rik=UxA5%2fEyi7b1yeg&pid=ImgRaw&r=0",
                    "https://gfsconsultores.com.mx/images/facebook_black.png",
                    "https://d1fdloi71mui9q.cloudfront.net/wEwO2OpySGSPNjM5biot_undefined",
                  ]}
                />
              </div>
            </div>
            <div className="contenedor_img_contacto">
              <a href="/">
                <img
                  className="imagen_contacto my-3"
                  src={img_github}
                  alt="Programador"
                />
              </a>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
