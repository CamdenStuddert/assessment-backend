const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, deleteFortune, changeFortune} = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get(`/api/fortunes`, getFortune)
app.post(`/api/fortunes`, addFortune)
app.delete(`/api/fortunes/:id`, deleteFortune)
app.put(`/api/fortunes/:id`, changeFortune)

app.listen(4000, () => console.log("Server running on 4000"));
