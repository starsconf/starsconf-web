# STARSCONF2017

# Requerimientos
  - Node > 4
  - Jade/Pug (HTML Preprocessador)
  - SCSS
  - Gulp/Watch.

### Para correr el cuento
- Primero `npm install` en el directorio para descargar las dependencias.
- Luego `gulp` para correr la web en el local server y ver los cambios.

### Para modificar el contenido de la página
 - Se edita el archivo `index.jade.json`
 - Todo el layout está separado por secciones en partials Jade en el directorio `partials`
 - Para agregar o quitar *keynoters* sólo se debe hacer en el `index.jade.json` y no olvidar activar o desactivar el switch `on`/`off`
 - Para agregar nuevos *sponsors* sólo basta hacerlo en el `index.jade.json` y el layout lo soportará.

### Sitio compilado
 - El html con sus assets, se compilan dentro de la carpera `_site`, como se encuentra configurado en el `gulpfile.js`
 - Si solo deseas hacer la compilación del proyecto, sin necesidad del levantar el servidor estático, puedes utilizar el comando `gulp build`

### Notas especiales
- Jade ahora se llama [Pug project](https://github.com/azemoh/gulp-pug-sass-seed/).
- Y aquí hay documentación https://pugjs.org/api/getting-started.html
- El proyecto usa [gulp-data](https://github.com/colynb/gulp-data)