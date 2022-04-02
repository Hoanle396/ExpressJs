const auth = require('./auth');

function routes(app){
    app.use('/api/auth',auth)
}
module.exports = routes