const express = require('express');
const router = express.Router();
const Artmodel = require('../model/artModel.js');

// GET all arts
router.get('/', (req, res) => {
  Artmodel.find()
    .then((arts) => res.json(arts))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET a single art by ID
router.get('/:id', (req, res) => {
  Artmodel.findById(req.params.id)
    .then((art) => res.json(art))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// POST a new art
router.post('/', async (req, res) => {
  const { artName, serial, src, alt, bids } = req.body;

  const newArt = new Artmodel({
    artName,
    serial,
    src,
    alt,
    bids
  });

  try {
    const savedArt = await newArt.save();
    res.json(savedArt);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update an existing art by ID
router.post('/:id', async (req, res) => {
  try {
    const updatedArt = await Artmodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedArt);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// DELETE an art by ID
router.delete('/:id', async (req, res) => {
  try {
    await Artmodel.findByIdAndDelete(req.params.id);
    res.json('Art deleted.');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
