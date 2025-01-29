# 👨🏻‍🎓 PROYECTO PRACTICAS_MICROSYSCOM 👨🏻‍🎓
# 📲 DESARROLLO DE LA API 📲

Es una aplicación desarrollada basado en los formularios, los cuales extraen el dato por el front
desarrollado con React y JS, generando en base a una lógica desarrollada una estadística de los datos,
dado unos valores señalados a los distintos inputs creados para su cumplementación.

Posteriormente establecemos una conexión con el backend en el cual mediante los parámetros del
fichero .env conectamos con la BBDD creada previamente en MySql, así mismo damos permiso de conexión con
Postman para así poder crear las routes válidas en el Dom que permitirán la visualización de los
distintos apartados y generarán una clave Token por cada usuario que se registre para dicha "encuesta",
esto permitirá un registro estable de logs en la bbdd permitiendo la recuperación del PDF generado en la
culminación del rellenado de todos los formularios establecidos.

## Los lenguajes OOB y algunas plataforma manejadas son:
    +   HTML -> en este establecemos los tags requeridos en los distintos apartados
    +   CSS -> el cual permite la visualización amena de lo requerido
    +   JS -> aplica toda la lógica de los renderizados utilizados en el DOM
    +   REACT -> Utilizado para la descarga de las librerías que facilitan la visualización responsive
    +   Git -> conexión para el respaldo del proyecto
            git config --global user.name "Nuestro nombre"
            git config --global user.email emailasociadoagit@example.com
    +   NodeJs -> creación de servidor web (like %IIS & Apache) y comunicación con mi front por parte del
        back mediante los endpoints (v-LTS)
                +   npm init -y -> creación del package-json
                +   npm nodemon 
                +   common js -> encapsulación de datos de JS en el back
                +   npm i express-fileupload -> carga de archivos
                +   npm i express
                +   npm i nodemon
                +   npm i chalk
                +   npm i morgan
                +   npm i cors
    +   MySql -> creación de .env y los distintos query de conexión con la BBDD y creación de los datos
        necesarios, así como la recuperación de los mismos
    +   Postman -> creación de las rutas que permtirán que la API creada pueda ser leída

## 𝌙 Avances del proyecto:

    + frontend
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
        ❌ - Generación de estadísticas (VOLVER A MIRAR, POR MODIFICACIONES DE LOS COMPONENTES)
        ❌ - Impresión de reporte (VOLVER A MIRAR, POR MODIFICACIONES DE LOS COMPONENTES)

    + backend
        ✅ - Creación de la BBDD (datos en el .env_example)
        ✅ - Creación y asociación de los paquetes que se utilizarán en todo el proceso Backend
        ✅ - Conexión con la BBDD
        ✅ - Conexión con Postman (Testing de la aplicación)
        ✅ - Conexión y creación de las principales routes de la API
            (finiquitados los .post)
            
## 🧧 PENDINGS 🧧 

    - Barra incremental en el proceso de rellenado de la información (implementado en el PoinstChart)
    - Menu Sidebar
        - SAI
        - Almacenamiento
        - Copias de Seguridad
        - Dominio
        - Página Web
        - Correo Corporativo
        - Call Center
        - Impresoras
        - ERP
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
    +   npm i 
    +   npm i 
    +   npm i 

## Paquetes instalados en el back

    +   npm i dotenv
    +   npm i @sengrid/mail
    +   npm i msql2
    +   npm i bcrypt
    +   npm i joi
    +   npm i jsonwebtoken


# 🛠️ CONFIGURACIONES ADICIONALES 🛠️

En el fichero .gitignore se contiene los ficheros que no podrán ser publicados por medidas de seguridad por lo cual se deberá aplicar el npm i así como la conf nuevamente de la conexión de la BBDD

##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).