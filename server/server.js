const express = require("express");
const cors = require("cors");

const app = express();

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'c6275ba384554fae9e7482d353f72136',
  captureUncaught: true,
  captureUnhandledRejections: true,
});


app.use(express.static(`${__dirname}/../public`));

rollbar.log('Hello world!');

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, deleteFortune, changeFortune, getAllFortunes} = require('./controller.js')

app.get("/api/doesntexist", (req, res) => {rollbar.error("Catch these hands")})


app.get("/api/compliment", getCompliment);
app.get(`/api/fortunes`, getFortune)
app.post(`/api/fortunes`, addFortune)
app.delete(`/api/fortunes/:id`, deleteFortune)
app.put(`/api/fortunes/:id`, changeFortune)
app.get(`/api/fortune`, getAllFortunes)

app.listen(4000, () => console.log("Server running on 4000"));
