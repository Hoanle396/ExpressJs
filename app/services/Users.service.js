const userRepo = require('../repositories/Users.repository');

class UserService {
  getAll() {
    return userRepo.getAll();
  }

  getOneByAccountId(accountId) {
    const conditions = { account: accountId };
    return userRepo.getOneByConditions(conditions);
  }

  getById(id) {
    return userRepo.getById(id);
  }

  updateOne(id, data) {
    return userRepo.updateOne(id, data);
  }
}

module.exports = new UserService();