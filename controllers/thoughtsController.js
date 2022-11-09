const {Thoughts, Users} = require('../models');

module.exports = {
    async findThoughts(req, res) {
        try{
            let dbThoughtData = await Thoughts.find();
            if (dbThoughtData) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async findSingleThought(req, res) {
        try{
            let dbThoughtData = await Thoughts.findOne({_id: req.params.id});
            if (dbThoughtData) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createThoughts(req, res) {
        try{
            let dbThoughtData = await Thoughts.create(req.body);
            let updatedUser = await Users.findOneAndUpdate({_id: req.body.userid}, {$push: {thoughts: dbThoughtData._id}})
            if (dbThoughtData && updatedUser) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try{
            let dbThoughtData = await Thoughts.findOneAndUpdate({_id: req.body._id}, req.body, {returnOriginal: false});
            if (dbThoughtData) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try{
            let dbThoughtData = await Thoughts.findOneAndDelete({_id: req.body._id}, {returnOriginal: false});
            if (dbThoughtData) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createReaction(req, res) {
        try {
            let dbThoughtData = await Thoughts.findOneAndUpdate({_id: req.params.id}, {$push: {reactions: req.body}}, {returnOriginal: false})
            if (dbThoughtData) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteReaction(req, res) {
        try {
            let dbThoughtData = await Thoughts.findOneAndUpdate({_id: req.params.id}, {$pull: {reactions: {reactionsId: req.body.reactionsId}}}, {returnOriginal: false})
            if (dbThoughtData) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
}