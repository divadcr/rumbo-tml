# Rumbo a Tomorrowland · FAQ

Preguntas frecuentes del grupo de WhatsApp "Rumbo a TML", que ayuda a quienes van a Tomorrowland Bélgica 2027 por primera vez. Es un proyecto de la comunidad, **no oficial**.

## Contenido

- `faq.json` — la fuente de datos de la web. Para cambiar el contenido basta con editar este archivo (y la fecha de `updated`).
  - `summary` — el **Resumen inicial** que se lee primero: introducción, fechas clave (`key: true` las destaca en dorado) y los puntos más importantes. Cada punto enlaza a preguntas completas por su `id` en `links`.
  - `categories` — las preguntas y respuestas (45, en 8 categorías). Cada respuesta es un fragmento de HTML. El campo `id` es opcional y solo hace falta en las preguntas a las que enlaza el resumen. Si un enlace apunta a un `id` que no existe, la compilación falla y avisa.
- `app/`, `components/`, `lib/` — la web en Next.js (App Router). Se genera como página estática.
  - `app/page.tsx` — cabecera, Resumen inicial (con las fechas clave) y pie.
  - `components/FaqBrowser.tsx` — buscador (sin tener en cuenta tildes, resalta coincidencias) y filtros por tema.
  - `components/TicketGuide.tsx` + `lib/guia.ts` — la **Guía selección de entrada**: un asistente paso a paso que termina en el nombre oficial en inglés del paquete que hay que buscar el día de la venta. Los textos, opciones y nombres están en `lib/guia.ts`. Se abre con el botón de la cabecera o con el enlace `/#guia`.
  - `components/Stars.tsx` — el cielo estrellado de la cabecera.
  - `app/globals.css` — los estilos del prototipo.
- `index.html` — el prototipo original en un solo archivo, como referencia.

## Desarrollo

```
npm install
npm run dev      # http://localhost:3000
npm run build    # compilación de producción
```

## Despliegue en Vercel

Importa el repositorio en Vercel: detecta Next.js solo, sin configuración extra. Cada push a `main` vuelve a desplegar.

## Próximos pasos

- Confirmar las preguntas pendientes:
  - Diferencia entre Easy Tent "confort" y la normal.
  - Si con entrada de camping y alojamiento fuera se puede entrar por la puerta de hoteles.
  - Cómo se cambia el nombre de una entrada al venderla.
  - Qué es Belgian Journey.
  - Salidas de Global Journey desde Canarias.
