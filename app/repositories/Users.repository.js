const  User  = require('../models/Users');

class UserRepository {
  getAll() {
    return User.find();
  }

  getById(id) {
    return User.findById(id);
  }

  getOneByConditions(conditions) {
    return User.findOne(conditions);
  }

  createOne(data) {
    return User.create(data);
  }

  updateOne(id, data) {
    return User.findByIdAndUpdate(id, data);
  }
}

module.exports = new UserRepository();