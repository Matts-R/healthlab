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
// result == true
if (this.password == this.hash){
  try{
  return result
  }
  catch (error){
    return json({ error: err.mesage });
  }
}
else{
  return json({ Mensagem: "Não foi encontrado senha para comparar" });
}
  });

  bcrypt.compare(password, hash, function(err, result) {
    // result == false
    if (this.password != this.hash){
    try{
      return result
      }
      catch (error){
        return json({ error: err.mesage });
      }
    } else{
      return json({ Mensagem: "Não foi encontrado senha para comparar" });
    }
});


    // const salt = await bcrypt.genSalt(this.rounds);
    // const hash = await bcrypt.hash(password, salt);
    // return hash;
  }
}

module.exports = AuthenticationService;
