const Tms = require('../models/tms.model');

module.exports = {
    
    addEqp: (req, res)=>{
        Tms.create(req.body)
            .then((newEqp)=>{
                res.json(newEqp);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    getOneEqp: (req, res)=>{
        Tms.findById({_id: req.params.id})
            .then((oneEqp)=>{
                res.json(oneEqp);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    getAllEqp: (req, res)=>{
        Tms.find({}).collation({locale:'en',strength: 2}).sort({eqpNumber:1})
        .then((allEqp)=>{
            res.json(allEqp);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    },

    
    deleteEqp: (req, res)=>{
        Tms.deleteOne({_id: req.params.id})

        .then((deletedEqp)=>{
            res.json(deletedEqp);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    },


    editEqp: (req, res)=>{
        Tms.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {
                new: true,
                runValidators: true
            })
            
            .then((updatedEqp)=>{
                res.json(updatedEqp);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },
}