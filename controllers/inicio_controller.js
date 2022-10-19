const { info } = require('console');
const path = require('path');

exports.get_inicio = (request,response,next) => {
    response.render(path.join('inicio','inicio.ejs'));
}
