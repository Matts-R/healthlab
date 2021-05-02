const bcrypt = require("bcrypt");

class AuthenticationService {
  #rounds = 5;

  static async generatePassword(password) {
    const salt = await bcrypt.genSalt(this.rounds);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }

  // TO-DO
  static async comparePassword(password) {
    // const salt = await bcrypt.genSalt(this.rounds);
    // const hash = await bcrypt.hash(password, salt);
    // return hash;
  }
}

module.exports = AuthenticationService;
