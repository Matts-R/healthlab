const bcrypt = require("bcrypt");
const { findUserByLogin } = require("../controller/UserController");
class AuthenticationService {
  #rounds = 5;
  
   static async generatePassword(password) {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  // TO-DO
  static async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  
}

module.exports = AuthenticationService; 
