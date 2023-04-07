const User = require('../models/User')

class UserController {
  async index(request, response) {
    const users = await User.query()
    return response.json(users)
  }
}

module.exports = new UserController