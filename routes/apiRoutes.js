const router = require("express").Router();
const Book = require("../models/Book");

// Get all saved books
router.get("/books", (req, res) => {
    Book.find({})
        .then(dbBook => res.json(dbBook))
        .catch(err => {
            res.status(400).json(err);
        });
});

// Save a book
router.post("/books", (req, res) => {
    Book.create(req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => {
            res.status(400).json(err);
        });
});

// Delete a book
router.delete("/books/:id", (req, res) => {
    Book.deleteOne({ _id: req.params.id })
        .then(dbBook => res.json(dbBook))
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;