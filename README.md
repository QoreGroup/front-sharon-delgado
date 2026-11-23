# Sharon Delgado – Página web

Página web profesional desarrollada con React, TypeScript, Vite y Tailwind CSS.

## Ejecutar en desarrollo

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Vite mostrará la dirección local para revisar la página.

## Generar versión de producción

```bash
npm run build
```

Los archivos listos para publicar se generan en la carpeta `dist/`.

## Publicación

Subir el contenido de `dist/` al directorio público del hosting (por ejemplo, `public_html`) y verificar que el hosting sirva `index.html` para las rutas del sitio.

## Actualizar opiniones del carrusel

Las opiniones se cargan desde [`public/opiniones.xlsx`](./public/opiniones.xlsx). Edita la primera hoja, `Opiniones`, conservando estas columnas en la primera fila:

| Nombre | Opinión | Tipo |
|---|---|---|
| Nombre que se mostrará | Texto de la opinión | `Ejemplo` o `Cliente` |

Las filas marcadas como `Ejemplo` se identifican como contenido ficticio en el sitio. Para publicar testimonios reales, reemplaza los ejemplos por opiniones autorizadas y cambia el tipo a `Cliente`. Guarda el archivo y recarga la página para ver los cambios; al desplegar, incluye también el archivo Excel en la carpeta `public/` para que Vite lo copie a `dist/`.

## Información que debe confirmarse antes de publicar

- Correo profesional de Sharon: pendiente de confirmación. No se muestra un correo en la web hasta recibir el dato correcto.
- Libro de Reclamaciones: el formulario de demostración que venía en el proyecto anterior no guardaba registros en una base de datos ni enviaba notificaciones reales. Se retiró de la interfaz para evitar que parezca un canal operativo. Para habilitarlo se requiere completar los datos del proveedor responsable y desarrollar/configurar el almacenamiento, correlativo, constancia y notificaciones.
- El correo `cristofer.bv@outlook.com` fue indicado únicamente para pruebas de notificación; no debe publicarse como correo de contacto de Sharon.
- Revisar y aprobar los textos, fotografías y enlaces de redes sociales antes de la publicación definitiva.

## Contenido incorporado

- Servicios jurídicos laborales proporcionados por la cliente.
- Perfil profesional y trayectoria facilitados por la cliente.
- Lema profesional: “Excelencia jurídica y compromiso en cada defensa”.
- WhatsApp de trabajo: +51 999 829 797.
- Atención a nivel nacional, presencial en Lima y Cajamarca, y virtual.
- Enlaces de Facebook, Instagram y LinkedIn.
- Fotografías incluidas en `sharon-imagenes.zip`.

## Nota

El archivo de opiniones incluye textos y nombres ficticios de ejemplo; reemplázalos por contenido real y autorizado antes de publicar.
