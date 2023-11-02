import { Lienzo } from "../components/hacker_effect";
export function Herramientas() {
  function traducirCoddevAJ() {
    var texto_es = document.getElementById("traducir_es").value;

    function traducirTextoEspecializado(texto) {
      var codigo_letra = {
        B: "V",
        C: "|",
        D: "E",
        E: "#",
        F: "$",
        G: "%",
        H: "&",
        I: "/",
        J: "K",
        K: "J",
        L: "=",
        M: "T",
        N: "\\",
        Ñ: "O",
        O: "+",
        P: "}",
        Q: "]",
        R: "[",
        S: "{",
        T: "-",
        U: "_",
        X: "Y",
        W: "Z",
        V: "B",
        Y: "X",
        Z: "@",
        A: "W",
      };

      var texto_traducido = "";

      for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i].toUpperCase();

        if (codigo_letra.hasOwnProperty(caracter)) {
          texto_traducido += codigo_letra[caracter];
        } else {
          texto_traducido += caracter;
        }
      }

      return texto_traducido;
    }

    var texto_traducido = traducirTextoEspecializado(texto_es);
    document.getElementById("resultado_coddev").textContent =
      "La traducción del texto de CODDEV-AJ es: " + texto_traducido;
  }

  function traducirEspañolLatam() {
    var texto_coddev = document.getElementById("traducir_coddev").value;

    function traducirTextoNormal(texto) {
      var codigo_letra = {
        V: "B",
        "|": "C",
        E: "D",
        "#": "E",
        $: "F",
        "%": "G",
        "&": "H",
        "/": "I",
        K: "J",
        J: "K",
        "=": "L",
        T: "M",
        "\\": "N",
        O: "Ñ",
        "+": "O",
        "}": "P",
        "]": "Q",
        "[": "R",
        "{": "S",
        "-": "T",
        _: "U",
        Y: "X",
        Z: "W",
        B: "V",
        X: "Y",
        "@": "Z",
        W: "A",
      };

      var texto_traducido = "";

      for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];

        if (codigo_letra.hasOwnProperty(caracter)) {
          texto_traducido += codigo_letra[caracter];
        } else {
          texto_traducido += caracter;
        }
      }

      return texto_traducido;
    }

    var texto_traducido = traducirTextoNormal(texto_coddev);
    document.getElementById("resultado_es").textContent =
      "La traducción del texto de ESPAÑOL LATAM es: " + texto_traducido;
  }

  function copiarResultado(elementId) {
    const resultadoElement = document.getElementById(elementId);
    const textoCopiado = resultadoElement.textContent;
    const textoSinTraducción = textoCopiado.replace(
      /^La traducción del texto de .+ es: /,
      ""
    );

    // Crear un elemento de textarea temporal para copiar el texto sin la traducción
    const textareaTemporal = document.createElement("textarea");
    textareaTemporal.value = textoSinTraducción;
    document.body.appendChild(textareaTemporal);

    // Seleccionar y copiar el contenido del textarea
    textareaTemporal.select();
    document.execCommand("copy");

    // Eliminar el textarea temporal
    document.body.removeChild(textareaTemporal);

    // Mostrar un mensaje de éxito
    const mensaje = document.createElement("div");
    mensaje.classList.add("alert", "alert-success");
    mensaje.textContent = "¡Texto copiado!";
    document.body.appendChild(mensaje);

    // Desvanecer y eliminar el mensaje después de 2 segundos
    setTimeout(function () {
      mensaje.classList.add("fade");
      setTimeout(function () {
        document.body.removeChild(mensaje);
      }, 1000);
    }, 2000);
  }

  return (
    <>
      <Lienzo />/
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="text-white">Traducir</h2>
          </div>
          <div className="col-sm-12 col-lg-6">
            <label htmlFor="traducir_es">
              <h3>Traducir a CODDEV-AJ</h3>
            </label>
            <br />
            <input
              className="form-control"
              name="traducir_es"
              id="traducir_es"
              pattern="[A-Za-z0-9¿?¡!',;.:]*"
              onKeyUp={(e) => {
                e.target.value = e.target.value.toUpperCase();
                traducirCoddevAJ();
              }}
              type="text"
              placeholder="Ingrese texto a traducir"
            />
            <h4>
              <span
                className="text-white rounded-2 bg-success"
                id="resultado_coddev"
              ></span>
            </h4>
            <button
              className="btn btn-sm btn-secondary mt-1"
              onClick={() => copiarResultado("resultado_coddev")}
            >
              Copiar
            </button>
          </div>
          <div className="col-sm-12 col-lg-6">
            <label htmlFor="traducir_coddev">
              <h3>Traducir a ESPAÑOL LATAM</h3>
            </label>
            <br />
            <input
              className="form-control"
              name="traducir_coddev"
              id="traducir_coddev"
              pattern="[A-Za-z0-9¿?¡!',;.:]*"
              onKeyUp={(e) => {
                e.target.value = e.target.value.toUpperCase();
                traducirEspañolLatam();
              }}
              type="text"
              placeholder="Ingrese texto a traducir"
            />
            <h4>
              <span
                className="text-white rounded-2 bg-primary"
                id="resultado_es"
              ></span>
            </h4>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => copiarResultado("resultado_es")}
            >
              Copiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
