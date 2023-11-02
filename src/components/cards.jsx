export function Cards({ nombre_proyecto, informacion, link }) {
  return (
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <div className="contenido">
            <h2> &lt;/&gt; </h2>
            <p>{nombre_proyecto}</p>
          </div>
        </div>
        <div class="card-back">
          <div className="contenido">
            <p>{informacion}</p>
            <a href={link}>Ver Proyecto</a>
          </div>
        </div>
      </div>
    </div>
  );
}
