const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');


router.post('/', async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || price == null) {
            return res.status(400).json({ error: 'Name and price are required' });
        }
        const newItem = new MenuItem({ name, description, price });
        await newItem.save();
        res.status(201).json({ message: 'Menu item added', item: newItem });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const items = await MenuItem.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
