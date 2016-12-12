//-----------------------------------------------
//  deploly your site
//-----------------------------------------------

const run = require('./run')

// Production model
global.DEBUG = false

function deploy() {
    run(require('./server'))
    yield run(require('./clean'))
    yield run(require('./bundle'))
    /* yield run(require('./publish')) */

}

module.exports =  deploy
