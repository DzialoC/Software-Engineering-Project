const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const vehicleInspectionRoutes = require('./routes/vehicleInspectionRoutes.js');
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/vehicle-inspection', vehicleInspectionRoutes);


// Sync database and start server
const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`sequelize server is running on port ${PORT}.`);
    });
}).catch(error => {
    console.error("Unable to connect to the database:", error);
});

module.exports = app;  // for testing purposes
