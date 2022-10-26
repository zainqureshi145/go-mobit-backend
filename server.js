const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("../backend/src/routes/user.route");
const dotenv = require('dotenv');


const app = express();
dotenv.config();

const port = process.env.PORT || 3000;


app.use(bodyParser.json())


app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});