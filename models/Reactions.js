const {Schema, model} = require('mongoose');
const Mongoose = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionID: {type: Mongoose.Types.ObjectId},
        reactionBody: {type: String, required: true, maxLength: 280},
        username: {type: String, required: "username is required"},
        createdAt: {type: Date, default: Date.now}
    }
)

const Reactions = model('reactions', reactionsSchema);

module.exports = Reactions;