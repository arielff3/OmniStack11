const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController.js')
const ProfilerController = require('./controllers/ProfilerController.js')
const SessionController = require('./controllers/SessionController.js')

const routes = express.Router()

routes.post('/session', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profille', ProfilerController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;