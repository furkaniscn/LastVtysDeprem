const express = require("express");
const depremModel = require("./models");
const app = express();

app.get("/get_info", async (request, response) => {
    const depremBilgileri = await depremModel.find({});
  
    try {
        response.send(depremBilgileri);
      } catch (error) {
        response.status(500).send(error);
      }
});