const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, deleteFortune, changeFortune, getAllFortunes} = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get(`/api/fortunes`, getFortune)
app.post(`/api/fortunes`, addFortune)
app.delete(`/api/fortunes/:id`, deleteFortune)
app.put(`/api/fortunes/:id`, changeFortune)
app.get(`/api/fortune`, getAllFortunes)

app.listen(4000, () => console.log("Server running on 4000"));
