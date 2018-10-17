const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @routes  GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items = res.json(items))

});

// For the code that's in here to be read by other files
module.exports = router;