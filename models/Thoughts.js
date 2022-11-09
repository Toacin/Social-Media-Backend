const {Schema, model} = require('mongoose');
const {dateFormat} = require('../utils/modelsHelpers');
const Reactions = require('./Reactions')

const thoughtsSchema = new Schema(
    {
        thoughtText: {type: String, required: "text is required", minLength: 1, maxLength: 280},
        createdAt: {type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
        username: {type: String, required: "username is required"},
        reactions: [Reactions]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

thoughtsSchema.virtual('reactionsCount').get(function() {
    return this.reactions.length;
})

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;