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
    async createThoughts(req, res) {
        try{
            let dbThoughtData = await Thoughts.create(req.body);
            let updatedUser = await Users.findOneAndUpdate({_id: req.params.userid}, {$push: {thoughts: dbThoughtData._id}})
            if (dbThoughtData && updatedUser) {
                res.status(200).json(dbThoughtData);
            } else {
                res.status(404).json("Something Went Wrong")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
}