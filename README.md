# Hub Northern — Actualizaciones y propuestas

Sitio HTML estático para que la administración del Colegio Northern vea el estado de las implementaciones y las propuestas comerciales asociadas.

## Cómo abrir

Abrí `index.html` en el navegador (doble clic o arrastrar el archivo a Chrome/Edge/Firefox). No requiere instalación ni servidor.

## Contenido

| Archivo | Uso |
|---------|-----|
| `index.html` | Bitácora de implementaciones y nuevas propuestas |
| `propuestas/landing.html` | Propuesta / presupuesto de la landing institucional |
| `propuestas/contratos.html` | Propuesta / alcance del sistema de contratos |
| `propuestas/uniformes.html` | Propuesta — gestor de uniformes e indumentaria |
| `propuestas/_plantilla.html` | Plantilla para nuevas propuestas |
| `css/styles.css` | Tipografía y paleta Northern compartida |
| `assets/` | Logo del colegio |

## Estados

En el hub y las propuestas se usan estas etiquetas:

- **Hecho** — ya implementado y disponible
- **En curso** — en desarrollo
- **Propuesta** — documentado, aún no iniciado
- **Fuera de alcance** — explícitamente excluido de la fase actual

## Cómo agregar una propuesta nueva

1. Copiá `propuestas/_plantilla.html` con un nombre descriptivo, por ejemplo `propuestas/biblioteca.html`.
2. Completá título, resumen, estado, alcance, inversión y notas.
3. En `index.html`, dentro de la sección **Nuevas propuestas**, reemplazá o ampliá el bloque vacío con un enlace a ese archivo (podés usar el mismo patrón de cards o una lista con badge).
4. Si querés acceso permanente en el menú superior, sumá un ítem en la navegación de todas las páginas.

## Diseño

Tipografía y colores tomados de la propuesta de landing:

- Instrument Serif (títulos)
- Plus Jakarta Sans (cuerpo)
- Verde institucional `#479046` sobre fondo `#f5f5f7`
