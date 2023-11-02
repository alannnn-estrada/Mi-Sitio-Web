import "../assets/css/styles_maintenance.css";
import "../assets/css/styles_maintenance_animation.css";

export function Mantenimiento() {
  return (
    <>
      <main className="container">
        <div className="row m-2 p-5 border border-success bg-dark text-center text-primary">
          <div className="col-12 text-center ">
            <div className="container-animation justify-content-center">
              <div className="human">
                <div className="helmetLogo"></div>
                <div className="helmet"></div>
                <div className="head"></div>
                <div className="torso"></div>
                <div className="arms arm-1"></div>
                <div className="arms arm-2"></div>
                <div className="legs leg-1">
                  <div className="shoes shoe-1"></div>
                </div>
                <div className="legs leg-2">
                  <div className="shoes shoe-2"></div>
                </div>
              </div>
              <div className="gear">
                <div className="gear-center"></div>
                <div className="gear-center-2"></div>
                <div className="gear-center-2-line rotate-45"></div>
                <div className="gear-center-2-line rotate-135"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
                <div className="gear-rectangle"></div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center text-md-left align-self-md-center">
            <h1 className="display-4 font-weight-bold text-primary font-italic">
              En mantenimiento
            </h1>
            <h5 className="text-warning">
              Este proceso puede llegar a tardar, por favor espere, disculpe los
              inconvenientes
            </h5>
            <h5 className="text-success">Nuevo contenido llegando</h5>
          </div>
        </div>
      </main>
      <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
    </>
  );
}
