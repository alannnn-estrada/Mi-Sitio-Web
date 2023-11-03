import { useEffect } from "react";

export function ParticleBackground({clase}) {
  useEffect(() => {
    window.particlesJS.load(
      "particles-js",
      "https://api-colors-4t6q-dev.fl0.io/api/colors/particles"
    );
  }, []);

  return <div id="particles-js" className={clase}></div>;
}
