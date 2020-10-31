import express from 'express';
import Speakers from "../models/speakers"
import { isAuth, isAdmin } from "../util"
const router = express.Router();

router.post("/", isAuth, isAdmin, async (req, res) => {
    const speakers = new Speakers({
        name: req.body.name,
        category: req.body.category,
        univ: req.body.univ,
        experiences: req.body.experiences,
    })
    const newSpeakers = await speakers.save()
    if (newSpeakers) {
        res.status(201).send({ msg: "new speakers created", data: newSpeakers })
    } else {
        return res.status(500).send({ msg: "error in creating speakers" })
    }
});

router.get("/", async (req, res) => {
    let speakers;
    if(req.query.category){
        const filter = req.query.category
        speakers = await Speakers.find({ category: { "$in" : [Number(filter)]}})
    } else {
        speakers = await Speakers.find({})
    }
    console.log(speakers)
    res.send(speakers)
});

router.get("/:id", async (req, res) => {
    console.log("test",req.params)
    const speaker = await Speakers.findById(req.params.id)
    res.send(speaker)
});

router.put('/:id', isAuth, isAdmin, async (req, res) => {
    try {
        const response = await Speakers.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    image: req.body.image,
                    price: req.body.price,
                    brand: req.body.brand,
                    category: req.body.category,
                    countInStock: req.body.countInStock,
                    description: req.body.description,
                    rating: req.body.rating,
                    numReviews: req.body.numReviews,
                }
            }
        )
        res.send(response)
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
    try {
        const response = await Speakers.deleteOne({ _id: req.params.id })
        res.json('Remove Success')
    } catch (err) {
        res.json({ message: err })
    }
})

export default router;