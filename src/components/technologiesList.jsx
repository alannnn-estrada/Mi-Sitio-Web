export function TecnologiasList({ lenguaje }) {
  return (
    <>
      {lenguaje && lenguaje.length > 0 ? (
        lenguaje.map((lenguaje, index) => (
          <p key={index} class="language lenguajesTec" data-language={lenguaje}>
            {lenguaje}
          </p>
        ))
      ) : (
        <p>No hay lenguajes disponibles</p>
      )}
    </>
  );
}
