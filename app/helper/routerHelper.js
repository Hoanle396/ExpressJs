
const helper = {
    AuthLogin: joi.Object.keys({ 
        email: joi.String().min(6).required(),
        password: joi.String().min(6).required(),

    }),
    AuthSignup: joi.Object.keys({ 
        firstName: joi.String().min(3).required(),
        lastName: joi.String().min(2).required(),
        email: joi.String().min(6).required(),
        password: joi.String().min(6).required(),
        passwordRepeat: joi.String().min(6).required(),
    })
}
module.exports = helper