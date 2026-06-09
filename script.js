/* =========================================================
   Playground de variáveis CSS
   O .js faz UMA coisa: muda o valor das variáveis no elemento.
   Todo o visual continua sendo responsabilidade do CSS.
   ========================================================= */
(function () {
  const box = document.getElementById("pgBox");
  if (!box) return;

  // mapeia cada slider para a variável CSS que ele controla
  const bind = (id, varName, unit = "") => {
    const slider = document.getElementById(id);
    if (!slider) return;
    const apply = () => box.style.setProperty(varName, slider.value + unit);
    slider.addEventListener("input", apply);
    apply(); // estado inicial
  };

  bind("pgHue", "--pg-hue", "");
  bind("pgRadius", "--pg-radius", "px");
  bind("pgRotate", "--pg-rotate", "deg");
  bind("pgShadow", "--pg-shadow", "");
})();
