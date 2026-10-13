# Lenguaje de movimiento — del reel promocional

Extraído de `video/reel-promocional-v2.mp4` (28 s, 1080×1920, 30 fps) y de su
código (`video/fuente-hyperframes/`). Sirve para que los reels futuros y las
piezas estáticas hablen el mismo idioma.

## Idea central

**«Ver por dentro.»** El reel convierte el punto final de «Endodoncia sin dolor.»
en un campo azul, abre una **lente** al interior del diente y muestra el trabajo
con un instrumento guiado por cursor, con una **escala de dolor de 8 a 0** como
metáfora visual. Después cierra con el logo, tres razones y la CTA.

> Cuidado: la escala 8→0 y «Sin dolor» son una **metáfora del reel**, no una
> garantía. En piezas y captions no se promete ese resultado (ver `contenido/`).

## Estructura (28 s)

| Tiempo | Escena |
|---|---|
| 0–1 s | Titular «Endodoncia.» sobre fondo claro de puntos; etiqueta mono «ESPECIALISTA EN ENDODONCIA» |
| 1–2.5 s | El titular sale en máscaras; el **punto** se vuelve el **campo azul** |
| 2.5–11 s | **Lente** → rayos X sobre tinta; instrumento y cursor recorren los conductos; escala de dolor |
| 11–13 s | El campo azul colapsa sobre el diente, que queda donde está el diente del logo; entra el logo |
| 13–21.7 s | Tarjeta «ficha» y 3 razones en carrusel vertical: **Trayectoria (+21)**, **Precisión**, **Cercanía**, **Ubicación** |
| 21.7–23.2 s | CTA «Agenda tu cita» |
| 23.2–28 s | Retorno y cierre con «Endodoncia sin dolor · Antiguo Country, Bogotá» |

## Reglas visuales

- Fondo claro con **puntos** y un **halo celeste**; escenas técnicas sobre **tinta**.
- **Un acento por escena:** azul `#00A3FF`. El coral `#FF5E4D` solo en los picos de la escala de dolor.
- Titulares en Jakarta 800 con tracking −0.04em; etiquetas en **Geist Mono** mayúsculas con tracking amplio.
- Tarjetas blancas con radio 46 px, cabecera azul con el logo, sombra azul suave.
- **Un solo gesto grande por momento**; lo demás queda quieto.

## Curvas y tiempos

Predominan `expo.out` (llegadas), `expo.in` / `expo.inOut` (salidas y transformaciones),
`power2.out`, `power3.inOut` y `sine.inOut` para respiración. Las transformaciones
(punto → campo, lente, colapso) son **continuas**: nada corta en seco, una forma se vuelve la siguiente.

## En una pieza estática

El «instante congelado» de cada efecto: el **enfoque** (`05-enfoque`), la **ficha**
(`09-ficha`), el punto azul final del titular (`.remate` + «.»), y el fondo de puntos.
