import { useState } from "react";
import { useParams } from "react-router-dom";

export function Especial() {
  // eslint-disable-next-line
  const { string } = useParams();
  const [noClicked, setNoClicked] = useState(false);
  const [siVisible, setSiVisible] = useState(false);

  function moveButton() {
    if (!noClicked) {
      setNoClicked(true);
      alert("No puedes decir que no:D.");
    }
  }

  function dijoSi() {
    setSiVisible(true);
    alert("Gracias bb, lo sabía. Feliz primer día de novios :3");
  }

  return (
    <>
      <main className="container">
        <div className="row justify-content-center">
          <div className="titulo col-12 text-center align-self-md-center">
            <h5 className="font-weight-bold text-white m-4">
              “Tu mirada es tan profunda como la inmensidad del mar, si te miro
              detenidamente corro el riesgo de perderme en tanta dulzura. Si
              tuviera que hacerte una dedicatoria no habría suficiente papel, ni
              tinta en todo el mundo para describir lo que deseo para ti” por
              todas estas cosas y muchísimas mas te propongo .....
            </h5>
            <h1 className="font-weight-bold text-white m-5">
              {string} ¿Quieres ser mi novia?
            </h1>
            <img
              src="https://c.tenor.com/pCRb5UelgzsAAAAC/quieres-ser-mi-novia.gif"
              alt="quieres-ser-mi-novia.gif"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="opciones col-12 text-center mt-4">
            <button
              id="btnNo"
              className={`p1 btn text-white btn-primary m-2 ${
                noClicked ? "disabled" : ""
              }`}
              onClick={moveButton}
            >
              No
            </button>
            <button onClick={dijoSi} className="btn text-white btn-primary">
              Si
            </button>
            {siVisible && (
              <div id="si">
                <h2 className="col-12 text-center text-white mt-2">
                  Gracias bb, lo sabía. Feliz primer día de novios :3
                </h2>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
