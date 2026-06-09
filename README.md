# O poder do CSS 🎨

> Uma apresentação interativa sobre **estilos, animações e recursos sofisticados de CSS**, feita para desenvolvedores front-end.

A proposta é simples: **a própria página é a demonstração**. Tudo aqui é HTML + CSS puro — sem frameworks, sem mágica. Cada conceito aparece em uma "estação" mostrando o **efeito ao vivo** de um lado e o **CSS real** (com realce de sintaxe) do outro, para que dê pra ler, copiar e modificar.

---

## ✨ O que tem dentro

São 9 estações em uma progressão natural de aprendizado:

| # | Estação | Conceitos |
|---|---------|-----------|
| 01 | Cores & gradientes | `linear-gradient`, `radial-gradient`, `conic-gradient`, `hsl()` |
| 02 | Sombras & profundidade | `box-shadow` empilhada, relevo e glow |
| 03 | Tipografia viva | `font-weight`, `letter-spacing`, gradiente no texto |
| 04 | Transições suaves | `transition`, `:hover`, curvas de animação |
| 05 | Transformações 2D/3D | `transform`, `perspective`, `rotateY`, cartão que vira |
| 06 | @keyframes & animações | `@keyframes`, `animation`, loops (flutuar, pulsar, girar) |
| 07 | Layout com Grid | `grid-template-columns`, `span`, unidade `fr` |
| 08 | Variáveis CSS (playground) | `--variaveis`, `var()`, controles interativos em tempo real |
| 09 | Recursos sofisticados | `clip-path`, `backdrop-filter`, `mix-blend-mode` |

Cada estação traz uma **dica prática** e o encerramento inclui um *cheat sheet* das principais propriedades.

---

## 🚀 Como usar

Não precisa de build nem de dependências. É só:

1. Clonar ou baixar o repositório.
2. Abrir o arquivo `index.html` no navegador.

```bash
git clone https://github.com/max-pessoa-nttltd/css-initial-studies.git
cd css-initial-studies
# abra o index.html no navegador (duplo clique já funciona)
```

> 💡 **Dica para a apresentação:** abra o DevTools (F12), inspecione qualquer elemento e mude os valores ao vivo. É onde o "aha!" acontece com os desenvolvedores.

---

## 🗂️ Estrutura do projeto

```
.
├── index.html    # estrutura da página e os blocos de código de cada estação
├── styles.css    # todos os estilos, animações e o sistema de design
└── script.js     # script mínimo que alimenta o playground de variáveis
```

O JavaScript faz apenas uma coisa: troca o valor das variáveis CSS no playground. Todo o visual continua sendo responsabilidade do CSS.

---

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3** — design tokens com custom properties, Grid, Flexbox, animações, `clip-path`, `backdrop-filter` e barra de progresso 100% CSS via `animation-timeline: scroll()`
- **JavaScript** vanilla (apenas para o playground interativo)
- Fontes: *Bricolage Grotesque*, *Inter* e *JetBrains Mono* (via Google Fonts)

---

## ♿ Acessibilidade

O projeto foi construído com um piso de qualidade em mente:

- Respeita `prefers-reduced-motion` (desliga animações para quem prefere menos movimento).
- Foco visível para navegação por teclado.
- Layout responsivo, que empilha em telas menores.

---

## 📚 Para quem é

Pensado como material de aula para **desenvolvedores front-end**, mas serve como referência rápida e divertida para qualquer pessoa que queira ver o CSS moderno em ação.

---

Feito para ser **inspecionado, copiado, quebrado e reconstruído**. 🤪
