const {Schema, model} = require('mongoose');

const usersSchema = new Schema(
    {
        username: {type: String, unique: "Username already taken", required: "username is required", trim: true},
        email: {type: String, unique: "email already taken", required: "email is required"},
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

usersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const Users = model('users', usersSchema);

module.exports = Users;