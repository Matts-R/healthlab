var DataTypes = require("sequelize").DataTypes;
var _post = require("./post");
var _post_tag = require("./post_tag");
var _tag = require("./tag");
var _user = require("./user");

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var post_tag = _post_tag(sequelize, DataTypes);

  user.hasMany(post, { as: "posts", foreignKey: "user_id" });
  post.belongsTo(user, { as: "user", foreignKey: "user_id" });
  post.hasMany(post_tag, { as: "post_tags", foreignKey: "post_id" });
  post_tag.belongsTo(post, { as: "post", foreignKey: "post_id" });
  tag.hasMany(post_tag, { as: "post_tags", foreignKey: "tag_id" });
  post_tag.belongsTo(tag, { as: "tag", foreignKey: "tag_id" });

  return {
    post,
    post_tag,
    tag,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
