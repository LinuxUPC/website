# LinuxUPC Website

Este proyecto es un sitio web para LinuxUPC, diseñado para explorar, aprender y crear con Software Libre en la UPC.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `assets/css/`: Contiene los archivos CSS.
  - `window.css`: Estilos comunes para los componentes de ventana.
  - `title.css`: Estilos para el componente de título.
- `assets/js/`: Contiene los archivos JavaScript.
  - `components.js`: Script para cargar componentes dinámicamente.
- `components/`: Contiene los archivos HTML de los componentes.
  - `title.html`: HTML para el componente de título.
  - `window.html`: HTML para los controles de ventana.

## Desplegar el Proyecto Localmente

Para evitar problemas con `fetch` y `file://`, hay que desplegar el proyecto desde un servidor local. Aquí hay algunas opciones:

### Usar Python

```sh
python -m http.server 8000
```

### Usar Node.js

```sh
npx http-server -p 8000
```

### Usar PHP

```sh
php -S localhost:8000
```