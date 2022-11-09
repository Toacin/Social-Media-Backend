const {Schema, Types} = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionID: {type: Schema.Types.ObjectId, default: () => new Types.ObjectId},
        reactionBody: {type: String, required: true, maxLength: 280},
        username: {type: String, required: "username is required"},
        createdAt: {type: Date, default: Date.now}
    }
)

module.exports = reactionsSchema;