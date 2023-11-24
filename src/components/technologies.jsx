import { TecnologiasList } from "./technologiesList";

function Tecnologias({ lenguaje }) {
  fetch("https://api-colors-dev-dcfq.3.us-1.fl0.io/api/colors/uppercase")
    .then((response) => response.json())
    .then((languageColors) => {
      const languageElements = document.querySelectorAll(".language");
      languageElements.forEach((element) => {
        const languageName = element.dataset.language;
        const color = languageColors[languageName];
        if (color) {
          element.style.color = color;
        }
      });
    })
    .catch((error) => {
      console.error("Error al cargar los datos desde la API:", error);
    });

  return (
    <div className="text-center text-columns">
      <ol>
        <TecnologiasList lenguaje={lenguaje} />
      </ol>
    </div>
  );
}
export default Tecnologias;
