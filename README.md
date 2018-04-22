# STARSCONF
# Versión 2018

# Requerimientos
  - Node > 4

### Para correr el cuento
- Ejecuta `npm install` en el directorio para descargar las dependencias.
- Luego `gulp build` para compilar los assets (Esto sólo la primera vez)
- Finalmente sólo `gulp` para correr la web en el local server. Los cambios se actualizarán solos gracias a BrowserSync.

### Para modificar el contenido de la página
 - Se edita el archivo `index.jade.json` para todos los textos y algunos links.
 - Todo el layout está separado por secciones en partials Pug en el directorio `partials`
 - Para agregar o quitar *keynoters* sólo se debe hacer en el `index.jade.json` y no olvidar activar o desactivar el switch `on`/`off`
 - Para agregar nuevos *sponsors* sólo basta hacerlo en el `index.jade.json` y el layout lo diagramará según corresponda.

### Sitio compilado
 - El html con sus assets, se compilan dentro de la carpera `_site`, como se encuentra configurado en el `gulpfile.js`
 - El sitio está configurado con Integración continua en la rama `master`

### Notas adicionales
- Documentación de [Pug project] https://pugjs.org/api/getting-started.html
- El proyecto usa [gulp-data](https://github.com/colynb/gulp-data)
- Los estilos usan SASS https://sass-lang.com/

### Para la sección de horarios de la conferencia

Para inicializar la app en un track especifico de la conferencia:

  * track 1: http://localhost:3000/realtime.html?track=1
  * track 2: http://localhost:3000/realtime.html?track=2
  * track 3: http://localhost:3000/realtime.html?track=3

Esto se ejecutará usando un reloj en tiempo real por lo tanto solo funcionará
los días reales de la conferencia. Pero, para simular un día especifico y hora especifica se puede pasar otros parametros (date y time) para
ver como funciona la app:

  Para probar que muestra el dia 04 de Noviembre del 2017 a las 13:30 se debe hacer lo siguiente:

EJ: http://localhost:3000/schedule.html?track=1&date=2017-11-04&time=13:30