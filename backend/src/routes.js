const express = require('express');

const OngController = require('./controllers/Ongcontroller');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.listar);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.listar);

routes.get('/incidents', IncidentController.listar);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;