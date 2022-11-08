const {Schema, model} = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtText: {type: String, required: "text is required", minlength: 1, maxlength: 280},
        createdAt: {type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
        username: {type: String, required: "username is required"},
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reactions'
            }
        ],
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