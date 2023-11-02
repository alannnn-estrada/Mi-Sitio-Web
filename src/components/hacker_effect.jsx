import { useEffect } from "react";
import "../assets/css/styles_lienzo.css";

export function Lienzo() {
  useEffect(() => {
    // Función para configurar el canvas y la animación
    function setupCanvas() {
      const canvas = document.getElementById("lienzo");
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      const cols = Math.floor(w / 10) + 1;
      const posicion_y = Array(cols).fill(0);

      function matrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#0f0";
        ctx.font = "10pt monospace";

        posicion_y.forEach((y, ind) => {
          const text = String.fromCharCode(Math.random() * 128);
          const x = ind * 10;
          ctx.fillText(text, x, y);
          if (y > 100 + Math.random() * 10000) {
            posicion_y[ind] = 0;
          } else {
            posicion_y[ind] = y + 10;
          }
        });
      }
      setInterval(matrix, 50);
    }

    setupCanvas(); // Llamar a la función cuando el componente se monta
  }, []);

  return <canvas id="lienzo"></canvas>;
}
