const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const db = require('./models')

const app = express();
const corsOptions = {origin: 'http://localhost:8081'};

const port = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({force: true})
    .then(() => console.log("Droped and Synced db"))
    .catch((error) => console.log(`Failed to sync db: ${error.message}`))

app.use(userRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
});