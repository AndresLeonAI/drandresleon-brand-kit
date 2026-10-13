# Pendientes — datos que NO están en este repo

El kit se construyó con lo verificable (web del doctor, su logo, el reel de
octubre). Esto falta. **Ningún agente debe inventarlo.** Las piezas que necesiten
estos datos usan el marcador `[[DATO]]` y `render.mjs` se niega a exportarlas.

## Para el doctor (o quien lo represente)

| # | Pendiente | Dónde impacta | Estado hoy |
|---|---|---|---|
| 1 | **Canal para agendar:** WhatsApp, enlace de agenda o teléfono | `contenido/cta.md`, cierre de cada pieza | La CTA usa «Escríbenos por mensaje directo» |
| 2 | **@ de Instagram** | caption, story | desconocido |
| 3 | **Dirección exacta** (¿se publica o solo «Antiguo Country»?) | cierre, story | solo «Antiguo Country, Bogotá» |
| 4 | **Paleta oficial**: ¿confirma el azul/marino del reel o prefiere otra? El logo es monocromo | `tokens.css` | azul = el del reel |
| 4b | **Aprobación del reel** (`video/`) y de su mensaje «sin dolor» | `video/` | sin aprobar |
| 5 | **Tuteo o usted** con los pacientes | todo el copy | tuteo, como su web |
| 6 | **«Endodoncia sin dolor»**: ¿cómo quiere formularlo? Es un resultado; no se usa como garantía | titulares | solo como eslogan de su web, nunca como promesa |
| 7 | **Años de experiencia**: confirmar «más de 21» y fecha de actualización | pieza `04-cifra` | dato de su web |
| 8 | **Credenciales:** universidad, posgrado, registro profesional, asociaciones | identidad | desconocido |
| 9 | **Tecnología y técnicas** que realmente usa (microscopio, localizador, etc.) | `especialidad.md` | no se menciona ninguna |
| 10 | **Consentimiento escrito** para mostrar casos/testimonios, si alguna vez se quiere | CLAUDE.md | no existe; no se usan |
| 11 | **Corregir drandresleon.com**: dice «Chapinero», la clínica está en Antiguo Country | web | desfasada |
| 12 | **Logo en vector (SVG)** | marca | solo PNG |
| 13 | **Fuente para mitos y realidades** (guías clínicas que respalda) | `especialidad.md` | sin fuentes |

## Decisiones tomadas por omisión (cámbielas si no le sirven)

- Zona: **Antiguo Country** (indicada por la familia; la web dice Chapinero).
- Contenido solo **educativo**; sin casos clínicos, sin pacientes, sin precios.
- Una sola acción por pieza: **agendar la cita**.
