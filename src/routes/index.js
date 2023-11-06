const express = require('express');
const route = express.Router();
const todoRoutes = require('./todo-route');

// mengirim respond dan request
route.get('/', (req, res) => {
    // respond with json
    res.json({
        message: 'Selamat datang di server ku'
    });
});

// routes
route.use('/todos', todoRoutes);
// route.use('/users', userRoutes);

module.exports = route;