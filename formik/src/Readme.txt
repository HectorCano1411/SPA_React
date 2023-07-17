
Para iniciar el servidor JSON en tu proyecto utilizando el comando json-server, 
debes abrir una terminal o línea de comandos en la carpeta raíz de tu proyecto y ejecutar el siguiente comando:
json-server --watch db.json --port 3000

Esto iniciará el servidor JSON utilizando el archivo db.json como fuente de datos y se ejecutará en el puerto 3000.

Asegúrate de tener instalado json-server globalmente en tu sistema. 
Si no lo tienes instalado, puedes instalarlo ejecutando el siguiente comando antes de iniciar el servidor:
npm install -g json-server

Una vez que hayas ejecutado el comando para iniciar el servidor, 
verás que el servidor JSON está activo y listo para recibir solicitudes en el puerto 3000.
 Puedes acceder a tus datos utilizando las rutas definidas en el archivo db.json.

Recuerda que debes tener el archivo db.json correctamente configurado con los datos que deseas utilizar en tu proyecto.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Este proyecto se renderiza en la dirección `localhost:3001` utilizando el servidor JSON proporcionado por `json-server`. 
El servidor se configura utilizando el comando `json-server --watch db.json --port 3001 --host localhost`, 
lo que significa que la aplicación estará disponible en `localhost` en el puerto `3001`.

El servidor JSON utiliza el archivo `db.json` como fuente de datos y proporciona endpoints que se pueden acceder para realizar operaciones CRUD.
Al ejecutar el comando, el servidor se inicia y permite interactuar con la aplicación en `localhost:3001`, lo que incluye realizar solicitudes HTTP a través de la biblioteca Axios para obtener, agregar, actualizar y eliminar datos.

En resumen, este proyecto se ejecuta en `localhost:3001` utilizando el servidor JSON configurado con `json-server`. 
Esta dirección es donde puedes acceder a la aplicación y realizar operaciones en la interfaz de usuario, interactuar con los datos almacenados en el servidor y utilizar la biblioteca Axios para realizar solicitudes HTTP.

Recuerda que debes asegurarte de que no haya ningún otro servicio en ejecución en el puerto 3001 para evitar conflictos.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Este proyecto incluye la biblioteca Axios, que es una biblioteca popular de JavaScript utilizada para realizar solicitudes HTTP desde una aplicación cliente.
 Axios proporciona una interfaz simple y fácil de usar para realizar solicitudes HTTP, ya sea para obtener datos de un servidor o para enviar datos al servidor.

En este proyecto, Axios se utiliza para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) 
en un servidor JSON utilizando el protocolo HTTP. Se utiliza para realizar solicitudes GET, POST, PUT y DELETE a través de la API del servidor JSON.

La biblioteca Axios simplifica la comunicación con el servidor,
 proporcionando funciones y métodos que permiten enviar datos, establecer encabezados personalizados, manejar respuestas y errores,
  y mucho más. Esto facilita el consumo de servicios web y la integración de datos en la aplicación.

Al incluir Axios en el proyecto, se pueden realizar solicitudes HTTP de manera eficiente y manejar las respuestas de manera efectiva, 
lo que mejora la interacción entre la aplicación cliente y el servidor.

En resumen, la inclusión de la biblioteca Axios en este proyecto permite realizar solicitudes HTTP de forma sencilla y eficiente, 
facilitando la comunicación entre la aplicación cliente y el servidor JSON.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Este proyecto utiliza Formik, una biblioteca de manejo de formularios en React. 
Formik simplifica la gestión y validación de formularios al proporcionar una solución simple y escalable.

Formik se utiliza en este proyecto para manejar el estado y la validación de los formularios.
 Proporciona funciones y componentes que facilitan la captura de datos del usuario, la validación de campos, el manejo de eventos y la presentación de mensajes de error.

Al utilizar Formik, se pueden establecer valores iniciales en los campos del formulario, 
manejar cambios y envíos, así como realizar validaciones de forma sencilla. También ofrece características adicionales como el manejo de campos táctiles,
 la habilitación y deshabilitación de campos, y la presentación de mensajes de error en tiempo real.

Formik ayuda a reducir la complejidad del código relacionado con los formularios 
y mejora la experiencia de usuario al proporcionar una forma más sencilla y robusta de interactuar con los formularios en una aplicación React.

En resumen, el uso de Formik en este proyecto permite una gestión y validación más sencilla de los formularios, 
mejorando la experiencia del usuario al interactuar con ellos.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- codigo para iniciar el serbidor db.json -->
<!-- para conseguir correr el servidor de Json tengo que estar dentro de la carpeta src -->
$ json-server --watch db.json --port 3000
% se encuentra alojado en: 
  http://localhost:3000/data
% ////////////////////////////////////////////
%  puerto en que se encuentra el front-end
% se hace correr en la terminal npm run dev
http://localhost:3001/

# SPA_React

Este proyecto es una aplicación de página única (Single Page Application) desarrollada en React. Proporciona una interfaz de usuario interactiva y dinámica utilizando una variedad de dependencias.

## Dependencias

A continuación se detallan las dependencias utilizadas en este proyecto:

### @babel/plugin-proposal-private-property-in-object

- Versión: 7.14.5
- Descripción: Plugin de Babel que permite utilizar la sintaxis de propiedades privadas en objetos en JavaScript.

### @fortawesome/free-solid-svg-icons

- Versión: 6.4.0
- Descripción: Biblioteca de iconos de FontAwesome en su variante de iconos sólidos. Proporciona una amplia gama de iconos para su uso en la interfaz de usuario.

### @fortawesome/react-fontawesome

- Versión: 0.2.0
- Descripción: Componentes de FontAwesome para React. Permite utilizar los iconos de FontAwesome de manera sencilla en componentes de React.

### @splidejs/react-splide

- Versión: 0.7.12
- Descripción: Biblioteca de carrusel para React. Proporciona una forma fácil y personalizable de agregar carruseles y deslizadores a la aplicación.

### @testing-library/jest-dom

- Versión: 5.16.5
- Descripción: Biblioteca de utilidades de pruebas para Jest en React. Proporciona funciones y métodos de aserción adicionales para facilitar las pruebas.

### @testing-library/react

- Versión: 13.4.0
- Descripción: Biblioteca de utilidades de pruebas para React. Permite realizar pruebas en componentes de React utilizando el enfoque basado en el usuario.

### @testing-library/user-event

- Versión: 13.5.0
- Descripción: Biblioteca para simular eventos de usuario en pruebas de React. Facilita la simulación de acciones del usuario, como clics y entradas.

### axios

- Versión: 1.4.0
- Descripción: Biblioteca para realizar solicitudes HTTP en el lado del cliente. Facilita la comunicación con servicios web y la manipulación de datos.

### bootstrap

- Versión: 5.3.0
- Descripción: Framework de CSS para la creación de interfaces responsivas. Proporciona una amplia gama de componentes y estilos predefinidos.

### formik

- Versión: 2.4.2
- Descripción: Biblioteca de manejo de formularios en React. Simplifica la validación, gestión y envío de formularios en aplicaciones React.

### react

- Versión: 18.2.0
- Descripción: Biblioteca principal de React para la construcción de interfaces de usuario. Proporciona un enfoque declarativo y basado en componentes para la construcción de aplicaciones.

### react-bootstrap

- Versión: 2.8.0
- Descripción: Implementación de los componentes de Bootstrap en React. Proporciona componentes predefinidos y estilos de Bootstrap listos para usar en aplicaciones React.

### react-datepicker

- Versión: 4.16.0
- Descripción: Componente de selección de fechas para React. Permite al usuario seleccionar fechas de forma intuitiva en formularios y otros elementos de la interfaz.

### react-dom

- Versión: 18.2.0
- Descripción: Biblioteca de enlace (binding) de React para el DOM. Proporciona métodos para renderizar componentes de React en el DOM de la aplicación.

### react-icons

- Versión: 4.10.1
- Descripción: Biblioteca de iconos para React. Incluye una amplia variedad de iconos de diferentes fuentes y estilos, listos para ser utilizados en componentes de React.

### react-router-dom

- Versión: 6.14.1
- Descripción: Biblioteca de enrutamiento para React. Permite definir y gestionar las rutas de la aplicación para la navegación entre páginas y componentes.

### react-scripts

- Versión: 5.0.1
- Descripción: Conjunto de scripts y configuraciones predefinidas para aplicaciones de React. Simplifica la configuración y el desarrollo de aplicaciones React.

### web-vitals

- Versión: 2.1.4
- Descripción: Biblioteca para medir y registrar las métricas de rendimiento clave de una aplicación web. Proporciona información sobre el rendimiento y la experiencia del usuario.

## Contribución

Si deseas contribuir a este proyecto, asegúrate de seguir las directrices de contribución y enviar solicitudes de extracción con tus mejoras o correcciones.


commits on Jul 17, 2023
se agrega carrio de compras con suma de precios
y su total al componente home.
se agrega Footer.
se agrega numero contador de servicios.
en caso de tener mas de un servicio con el mismo nombre,
se puede quitar solo un servio del carrito. 

@HectorCano1411
HectorCano1411 committed 26 minutes ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
Commits on Jul 16, 2023
modificando db.json

@HectorCano1411
HectorCano1411 committed 20 hours ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
se agrega contador de productos al carrito y componente modal para agregar y quitar productos

@HectorCano1411
HectorCano1411 committed 20 hours ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
componente Home al 80% con estilos y condicionales falta mensaje de producto editado con exito

@HectorCano1411
HectorCano1411 committed yesterday
Copy the full SHA
View commit details
Browse the repository at this point in the history
Commits on Jul 15, 2023
SPA Linskeada/trabajando en los estilos Bootstrap

@HectorCano1411
HectorCano1411 committed 2 days ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
Commits on Jul 14, 2023
subiendo formulario al 100 y seccion home pero se sobrepone (version estable)

@HectorCano1411
HectorCano1411 committed 2 days ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
Commits on Jul 12, 2023
formulario al 90%

@HectorCano1411
HectorCano1411 committed 5 days ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
Commits on Jul 11, 2023
subiemdo readme con indicaciones y fetch API

@HectorCano1411
HectorCano1411 committed 5 days ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
primer comit SPA_React

@HectorCano1411
HectorCano1411 committed 5 days ago


