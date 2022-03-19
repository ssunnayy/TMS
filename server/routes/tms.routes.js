const TmsController = require("../controllers/tms.controller");

module.exports = (app) =>{
    app.get('/api/tms', TmsController.getAllEqp);

    app.post('/api/tms', TmsController.addEqp);

    app.put('/api/tms/:id', TmsController.editEqp);

    app.delete('/api/tms/:id', TmsController.deleteEqp);
    
    app.get('/api/tms/:id', TmsController.getOneEqp);
}