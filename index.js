// Declarar variables para el uso de las aplicaciones
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser'); // Uso de la cookies (client)
const session = require('express-session'); //Uso de la sesiones (Server)

//Activar motor de busqueda templete EJS
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'fewfw4f34fgergerferf',
    resave: false,
    saveUninitialized: false,
}));

//Declarar las rutas con los controladores
const ruta_inicio = require('./routes/inicio.routes');
app.use('/inicio',ruta_inicio); //Pagina de inicio

const operacion_ruta = require('./routes/operacion.routes');
app.use('/operacion',operacion_ruta);

//Configurar ruta no encontrada por medio de un middelware
app.use((request, response, next) => {
    response.status(404);
    response.render(path.join('error'));
})
app.listen(3000);