const express = require("express");
const RatRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/Rat.js");

// routes and middleware specific to this router

//GET all Rats
RatRouter.get("/", index);

//CREATE new rats
RatRouter.post("/", create);

//Update Rats
RatRouter.put("/:id", update);

//Delete/Destroy Rats
RatRouter.delete("/:id", destroy);

module.exports = RatRouter;