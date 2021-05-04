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
    bcrypt.compare(password, hash, function(err, result) {
    const salt = await bcrypt.genSalt(this.rounds);
    const hash = await bcrypt.hash(password, salt);
      if(hash == password){
        return result
      }else{
        return err.message
      }
    })
  bcrypt.compare(password, hash, function(err, result) {
    // result == false
     const salt = await bcrypt.genSalt(this.rounds);
     const hash = await bcrypt.hash(password, salt);
    if(hash != password){
      return result
    }else{
      return err.message
    }
});
 
    // return hash;
  }
}

module.exports = AuthenticationService;
