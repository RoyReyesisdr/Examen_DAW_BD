const express = require('express');
const router = express.Router();

//Definir mis controladores
const inicio_controlador = require("../controllers/inicio_controller");

router.get('/pagina', inicio_controlador.get_inicio);


module.exports = router;
