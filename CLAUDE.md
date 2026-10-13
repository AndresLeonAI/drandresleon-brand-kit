# Instrucciones para Claude — contenido estático de Instagram del Dr. Andrés León

Tu trabajo en este repositorio es **crear piezas estáticas para el Instagram del
Dr. Andrés León, especialista en Endodoncia en Bogotá**: posts, carruseles y
stories. Cada pieza es un HTML construido con las plantillas de
`instagram/plantillas/` y exportado a PNG con `instagram/render.mjs`.

A diferencia del kit de NODOTO (que le habla a profesionales), **este kit le habla
a pacientes**: contenido educativo, cercano y prudente sobre endodoncia, que
termina en agendar una cita.

## Lee en este orden antes de crear nada

1. `marca/identidad.md` — quién es el doctor, a quién le habla, qué lo diferencia.
2. `marca/voz-y-copy.md` — cómo habla la marca y qué nunca dice.
3. `contenido/reglas-publicidad-salud.md` — lo que NO se puede publicar en salud.
4. `contenido/especialidad.md` — qué se puede explicar de endodoncia (y cómo).
5. `contenido/cta.md` — la única acción que pide cada pieza.
6. `marca/tokens.css` — colores, tipografía y escala. No inventes otros.
7. `motion/principios.md` — el lenguaje del reel promocional (`video/`), traducido a lo estático.
8. `instagram/guia.md` — formatos, pilares, ideas y checklist.
9. `marca/pendientes.md` — datos que el doctor aún no ha entregado. **No los inventes.**

## Reglas que no se rompen

| Regla | Por qué |
|---|---|
| **Nunca publiques precios**, descuentos ni promociones | Es publicidad de un servicio de salud; el valor se da en la valoración |
| **Nunca prometas resultados** («sin dolor garantizado», «100 % efectivo», «salva su diente») | Ningún tratamiento garantiza resultado; la promesa daña la credibilidad y puede incumplir normas |
| **Nada de antes y después** de pacientes | Sin consentimiento escrito no se publica, y ese permiso no está en este repo |
| **Ninguna estadística sin fuente verificable** | Una cifra inventada destruye la confianza de un paciente y de sus colegas |
| **No diagnostiques ni recetes por Instagram** | Las piezas informan; solo una valoración clínica diagnostica. Toda pieza de síntomas lleva la nota de prudencia |
| **No uses nombres, fotos, radiografías ni datos de pacientes** | Datos de salud = datos sensibles (Ley 1581 de 2012). Solo con consentimiento escrito |
| **Nada de urgencia falsa** («últimos cupos», «solo hoy») | Si mañana también aplica, el paciente lo nota |
| **No desprestigies a colegas ni otras clínicas** | Ética profesional |
| **Zona: Antiguo Country, Bogotá. Nunca «Chapinero»** | Chapinero aparece en su web por error; la clínica está en Antiguo Country |
| **Solo la paleta y las 3 tipografías de `tokens.css`** (Plus Jakarta Sans titulares, Geist cuerpo, Geist Mono etiquetas) | Coherencia con el reel promocional; las fuentes van incluidas en el repo |
| **El logo no se toca** | Sin deformar, recolorear a otro tono ni agregar efectos. Usa `marca/logo-claro.png` sobre oscuro y `logo-oscuro.png` sobre claro |
| **Cada pieza termina en agendar la cita** | Ver `contenido/cta.md` |
| **Todo contenido clínico nuevo lo valida el doctor antes de publicarse** | Ver `contenido/validar-con-el-doctor.md` |

## Flujo de trabajo

```bash
npm install                          # instala Playwright
npx playwright install chromium      # (si ya tiene Chromium: CHROMIUM_PATH=/ruta/al/chrome)
# 1. copia una plantilla a instagram/ejemplos/<fecha>-<tema>/
# 2. edita solo el contenido marcado con data-editar
# 3. exporta:
node instagram/render.mjs instagram/ejemplos/<carpeta>
```

`render.mjs` exporta cada `.html` de la carpeta a un `.png` del tamaño exacto
(1080×1350 feed, 1080×1920 stories). **Se niega a exportar** una pieza que
contenga marcadores `[[DATO]]` sin resolver. Revisa cada PNG antes de entregar:
texto cortado, líneas huérfanas, contraste, el logo legible.

## Entrega

Por cada pieza entrega el PNG y un `caption.md` en la misma carpeta con: el copy
(60–120 palabras, primera línea que detenga el scroll), la invitación a agendar,
la nota de prudencia si habla de síntomas, 5 a 8 hashtags de `instagram/guia.md`,
y una línea **«Validar con el doctor:»** que liste cada afirmación clínica de la
pieza. Esa pieza no se publica hasta que él la apruebe.
