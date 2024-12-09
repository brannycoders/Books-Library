const express = require('express');
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
    filterByGenre,
    toggleAvailability,
} = require('../controllers/bookController');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/genre/:genre', filterByGenre);
router.patch('/:id/availability', toggleAvailability);

module.exports = router;
