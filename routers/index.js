const user = require('./user');

function routes(app){
    app.use('/api/user',user)
}
module.exports = routes