# Dr. Andrés León — Brand Kit

Marca, contenido educativo y plantillas de Instagram del **Dr. Andrés León**,
especialista en Endodoncia en Antiguo Country, Bogotá
([drandresleon.com](https://drandresleon.com)).

Existe para que cualquier persona o agente (por ejemplo, un Claude en la nube)
pueda **crear contenido estático de Instagram** sin salirse de la marca ni
decir nada que un profesional de la salud no deba decir. Las instrucciones para
agentes están en [`CLAUDE.md`](CLAUDE.md).

Hermano de [`nodoto-brand-kit`](https://github.com/AndresLeonAI/nodoto-brand-kit),
con la misma estructura, pero pensado para **pacientes** y con reglas de
publicidad en salud.

## Contenido

| Carpeta | Qué hay |
|---|---|
| [`marca/`](marca) | Identidad, voz y copy, tokens (colores, tipografía), logo en 3 colores, fuente incluida, **datos pendientes** |
| [`contenido/`](contenido) | Reglas de publicidad en salud, qué se puede explicar de endodoncia, la CTA y el protocolo de validación con el doctor |
| [`instagram/`](instagram) | Guía de contenido, 9 plantillas HTML (feed y story), un carrusel de ejemplo y el script que exporta a PNG |
| [`motion/`](motion) | El lenguaje de movimiento del reel promocional |
| [`video/`](video) | El **reel promocional** (MP4 final) y su código fuente HyperFrames, de donde sale la identidad visual |

## Uso rápido

```bash
npm install
npx playwright install chromium
node instagram/render.mjs instagram/plantillas
node instagram/render.mjs instagram/ejemplos/01-senales-que-no-se-ignoran
```

## Estado — léalo

- **El logo es el oficial.** La identidad visual (azul/marino, tipografías, tarjeta
  ficha, puntos y halo) sale **del reel promocional** y el doctor debe confirmarla
  (`marca/pendientes.md`).
- **Faltan datos de contacto** (WhatsApp, enlace de agenda, @ de Instagram). Hasta
  entonces la CTA invita a escribir por mensaje directo.
- **Ninguna afirmación clínica está validada por el doctor todavía.** Ver
  `contenido/validar-con-el-doctor.md`.

© Dr. Andrés León. Logo, nombre y textos son del doctor y se publican como
referencia para producir su contenido; no se autoriza su uso por terceros.
