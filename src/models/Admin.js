const Model = require('./index');
const User = require('./User');

class Admin extends Model {
  static get tableName() {
    return 'admins';
  }

  static get idColumn() {
    return 'userEmail';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          to: 'users.email',
          from: 'admins.userEmail',
        },
      },
    };
  }
}

module.exports = Admin;
