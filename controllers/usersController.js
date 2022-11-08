const {Users, Thoughts} = require('../models')

module.exports = {
    async createUser(req, res) {
        try {
            let dbUserData = await Users.create(req.body);
            if (dbUserData) {
                res.status(200).json(dbUserData)
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async findUsers(req, res) {
        try{
            let dbUserData = await Users.find();
            if (dbUserData) {
                res.status(200).json(dbUserData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async findOneUser(req, res) {
        try{
            let dbUserData = await Users.findOne({_id: req.params.id});
            if (dbUserData) {
                res.status(200).json(dbUserData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try{
            let dbUserData = await Users.findOneAndUpdate({_id: req.params.id}, req.body, {returnOriginal: false});
            if (dbUserData) {
                res.status(200).json(dbUserData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteUser(req, res) {
        try{
            let dbUserData = await Users.findOneAndDelete({_id: req.params.id});
            if (dbUserData) {
                res.status(200).json(dbUserData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async addFriend(req, res) {
        try {
            let dbUserData = await Users.findOneAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}}, {returnOriginal: false});
            let dbUserDataReverse = await Users.findOneAndUpdate({_id: req.params.friendId}, {$push: {friends: req.params.id}}, {returnOriginal: false});
            if (dbUserData && dbUserDataReverse) {
                res.status(200).json({dbUserData, dbUserDataReverse});
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch(err) {
            res.status(500).json(err)
        }
    },
    async deleteFriend(req, res) {
        try {
            let dbUserData = await Users.findOneAndUpdate({_id: req.params.id}, {$pull: {friends: req.params.friendId}}, {returnOriginal: false});
            let dbUserDataReverse = await Users.findOneAndUpdate({_id: req.params.friendId}, {$pull: {friends: req.params.id}}, {returnOriginal: false});
            if (dbUserData && dbUserDataReverse) {
                res.status(200).json({dbUserData, dbUserDataReverse});
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch(err) {
            res.status(500).json(err)
        }
    },
}