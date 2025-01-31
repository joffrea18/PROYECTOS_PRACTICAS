# 👨🏻‍🎓 PROYECTO PRACTICAS * GRADO SUPERIOR 👨🏻‍🎓
# 📲 DESARROLLO DE API 📲

Es una aplicación desarrollada basada en formularios, los cuales extraen el dato por el front
desarrollado con React y JavaScript, generando una estadística de los datos,
dados los valores señalados para los distintos inputs / checkboxes creados para su cumplimentación.

Posteriormente establecemos una conexión con el backend (desarrollado con NodeJs) en el cual mediante los parámetros
del fichero .env conectamos con la BBDD creada previamente en MySql, así mismo damos permiso de conexión y validamos
las conexiones mediante Postman para así poder crear las rutas válidas en el Dom que permitirán la visualización de
los distintos apartados y generarán una clave Token por cada usuario que se registre en dicha "encuesta",
esto permitirá un registro estable de logs en la bbdd permitiendo la recuperación del PDF e información de los clientes. Trabajo dicho proyecto y desarrollo de manera unitaria y en base a almacenar la información en BBDD por medidades de seguridad así como un código único / propio por prevención de seguridad.

## Los lenguajes OOB y algunas plataforma manejadas son:
    +   HTML -> en este establecemos los tags requeridos en los distintos apartados.
    +   CSS -> el cual permite la visualización amena de lo requerido.
    +   JavaScript -> aplica toda la lógica de los renderizados utilizados en el DOM y backend.
    +   REACT -> Utilizado para la descarga de las librerías que facilitan la visualización responsive, así como el renderizado de la información de manera universal, basándome en este lenguaje desarrollado por Facebook y adquiriendo los beneficios que este actualmente presta.
    +   NodeJs -> creación de servidor web (like %IIS & Apache) y comunicación con el front por parte del
        back mediante los endpoints (v-LTS)
    +   Git -> conexión para el respaldo del proyecto
            git config --global user.name "Nuestro nombre"
            git config --global user.email emailasociadoagit@example.com  
    +   MySql -> creación de .env y los distintos query de conexión con la BBDD y creación de los datos
        necesarios, así como la recuperación de los mismos
    +   Postman -> validación de las rutas y medidas de seguridad para pruebas de automatización que confirmarán la autenticidad de la API.

## 𝌙 Avances del proyecto:

    + FRONTEND
        ✅ - Creados los forms
        ✅ - Visualización de información dinámica
        ✅ - Captura del dato en el localhost
        ✅ - Visualización del dominio registrado en el Welcome y añadido a la BBDD
        ✅ - Menú Sidebar
            +   Firewall
            +   Router
            +   SwitchInfo
            +   AccesPoint
            +   XDR
            +   Servidores
            +   ERP
            +   SAI
        ❌ - Generación de estadísticas (VOLVER A MIRAR, POR MODIFICACIONES DE LOS COMPONENTES)
        ❌ - Impresión de reporte (VOLVER A MIRAR, POR MODIFICACIONES DE LOS COMPONENTES)

    + BACKEND
        ✅ - Creación de la BBDD (datos en el .env_example)
        ✅ - Creación y asociación de los paquetes que se utilizarán en todo el proceso Backend
        ✅ - Conexión con la BBDD
        ✅ - Conexión con Postman (Testing de la aplicación)
        ✅ - Conexión y creación de las principales routes de la API
            (finiquitados los .post)
            
## 🧧 PENDINGS 🧧 

    - Barra incremental en el proceso de rellenado de la información (implementado en el PoinstChart)
    - Menu Sidebar
        - Almacenamiento
        - Copias de Seguridad
        - Dominio
        - Página Web
        - Correo Corporativo
        - Call Center
        - Impresoras
        - Otras Aplicaciones

# ↗️ PRÓXIMOS AVANCES ↗️

        - Hacer dinámico el botón de manera emergente en el apartado
        de servidores.
        - Mediante .get del backend visualización de datos anteriores almacenados en la BBDD en la sesión de cada usuario validado.
        - View report details con todos los campos añadidos una vez analizados.

******************************************************************************************************************************************************************************************************************************************

# 📚 LIBRERIAS INSTALADAS 📚

    +   @MIU
    +   SWAL
    +   REACT-ROUTER-DOM
    +   npm install gradient
    +   npm install react-router-dom
    +   npm install @mui/material @emotion/react @emotion/styled
    +   npm install chart.js react-chartjs-2
    +   npm install yup @hookform/resolvers
    +   npm install react-hook-form
    +   npm i react-intl
    +   npm i sweetalert2
    +   npm i react-chartjs-2
    +   npm i chart.js
    +   npm i jspdf
    +   npm i html2canvas
    +   npm i react-multi-carousel

## Paquetes instalados en el back

    +   npm i dotenv
    +   npm i @sengrid/mail
    +   npm i msql2
    +   npm i bcrypt
    +   npm i joi
    +   npm i jsonwebtoken
    +   npm init -y
    +   npm i nodemon 
    +   npm i commonjs
    +   npm i express-fileupload
    +   npm i express
    +   npm i nodemon
    +   npm i chalk
    +   npm i morgan
    +   npm i cors


# 🛠️ CONFIGURACIONES ADICIONALES 🛠️

En el fichero .gitignore se contiene los ficheros que no podrán ser publicados por medidas de seguridad por lo cual se deberá aplicar el npm i así como la conf nuevamente de la conexión con la BBDD.

##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).