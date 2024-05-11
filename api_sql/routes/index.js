const { Router } = require('express');
const router = Router();

const ticketController = require('../controllers/ticketController.js');

//RUTAS

module.exports = (app) => {

    //Tickets
    router.get('/ticket/find', ticketController.find);
    router.get('/ticket/find/:id', ticketController.findById);
    router.post('/ticket/create', ticketController.create);

    app.use('/', router);
};