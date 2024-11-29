# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

LIBRERIAS INSTALADAS

@MIU
SWAL
REACT-ROUTER-DOM

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

******************************************************************************************************************************************************************************************************************************************

## PRÓXIMOS AVANCES

# Agregar restricción de botones del checkbox
# Mostrar nombre de la empresa en el reporte impreso
# Hacer dinámico el botón de manera emergente

## ALGUNAS LIBRERÍAS INSTALADAS

# npm install gradient
# npm install react-router-dom
# npm install @mui/material @emotion/react @emotion/styled
# npm install chart.js react-chartjs-2

### INFORMACION DE LA APP
## PENDIENTES

# Barra incremental en el proceso de rellenado de
#   la información
# Menú en la derecha de forma vertical
# View report details con todos los campos
#   añadidos una vez analizados
# Generar csv que permita logs de errores e
#   inventario de equipos  

### En el apartado de Costes
## Listos
# Firewall
# Router
# SwitchInfo
# AccesPoint
# XDR

## Pendientes
# Servidores

## DESARROLLO DE LA API

Es una aplicación desarrollada basado en los formularios, los cuales extraen el dato por el front desarrollado con React y JS, generando en base a una lógica desarrollada una estadística de los datos, dado unos valores señalados a los distintos inputs creados para su cumplementación.

Posteriormente establecemos una conexión con el backend en el cual mediante los parámetros del fichero .env conectamos con la BBDD creada previamente en MySql, así mismo damos permiso de conexión con Postman para así poder crear las routes válidas en el Dom que permitirán la visualización de los distintos apartados y generarán una clave Token por cada usuario que se registre para dicha "encuesta", esto permitirá un registro estable de logs en la bbdd permitiendo la recuperación del PDF generado en la culminación del rellenado de todos los formularios establecidos.

Los lenguajes OOB y algunas plataforma manejadas son:
    + HTML -> en este establecemos los tags requeridos en los distintos apartados
    + CSS -> el cual permite la visualización amena de lo requerido
    + JS -> aplica toda la lógica de los renderizados utilizados en el DOM
    + REACT -> Utilizado para la descarga de las librerías que facilitan la visualización responsive
    + Git -> conexión para el respaldo del proyecto
            git config --global user.name "Nuestro nombre"
            git config --global user.email emailasociadoagit@example.com
    + NodeJs -> creación de servidor web (like %IIS & Apache) y comunicación con mi front por parte del back mediante los 
                endpoints (v-LTS)
                    npm init -y -> creación del package-json
                    npm nodemon 
                    common js -> encapsulación de datos de JS en el back
                    npm i express-fileupload -> carga de archivos
                    npm i express
                    npm i nodemon
                    npm i chalk
                    npm i morgan
    + MySql -> creación de .env y los distintos query de conexión con la BBDD y creación de los datos necesarios,
                así como la recuperación de los mismos
    + Postman -> creación de las rutas que permtirán que la API creada pueda ser leída

Avances del proyecto:
    + frontend (READY)
        ✅ - Creados los forms
        ✅ - Visualización de información dinámica
        ✅ - Captura del dato en el localhost
        ✅ - Generación de estadística basado en la lógica creada para cada apartado

    + backend (EN DESARROLLO)
        ✅ - Creación de la BBDD (datos en el .env_example)
        - Conexión con la BBDD
        - Conexión y creación de las principales routes de la API

## CONFIGURACIONES ADICIONALES

En el fichero .gitignore se contiene los ficheros que no podrán ser publicados por medidas de seguridad
    por lo cual se deberá aplicar el npm i así como la conf nuevamente de la conexión de la BBDD