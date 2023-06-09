const Model = require('./index');

class Review extends Model {
  static get tableName() {
    return 'reviews';
  }

  static get idColumn() {
    return 'id';
  }

  static get modifiers() {
    return {
      getReviewerName(builder) {
        builder.select('reviews.*', 'users.name as reviewerName')
          .innerJoin('professors', 'reviews.reviewerEmail', 'professors.userEmail')
          .innerJoin('users', 'users.email', 'professors.userEmail');
      },
    };
  }

  static get relationMappings() {
    const Professor = require('./Professor');
    const Proposal = require('./Proposal');
    return {
      reviewer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Professor,
        join: {
          from: 'reviews.reviewerEmail',
          to: 'professors.userEmail',
        },
      },
      proposal: {
        relation: Model.BelongsToOneRelation,
        modelClass: Proposal,
        join: {
          from: 'reviews.proposalId',
          to: 'proposals.id',
        },
      },
    };
  }
}

module.exports = Review;
