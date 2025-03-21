import express from "express";
import Coffee from "../models/Coffee.js";

const coffeeRouter = express.Router();

/**
 * GET / gets all coffees
 */
coffeeRouter.get("/", async (req, res) => {
  const coffees = await Coffee.find();
  res.json(coffees);
});

/**
 * POST / create a new coffee
 */
coffeeRouter.post("/", async (req, res) => {
  const coffee = new Coffee(req.body);
  await coffee.save();
  res.json(coffee);
});

/**
 * GET /:id get a coffee by the id
 */
coffeeRouter.get("/:id", async (req, res) => {
  const coffee = await Coffee.findById(req.params.id);
  res.json(coffee);
});

/**
 * PUT /:id update a coffee by the id
 */
coffeeRouter.put("/:id", async (req, res) => {
  const coffee = await Coffee.findByIdAndUpdate(req.params.id, req.body);
  res.json(coffee);
});

/**
 *   DELETE /:id delete a coffee by the id
 */
coffeeRouter.delete("/:id", async (req, res) => {
  const coffee = await Coffee.findByIdAndDelete(req.params.id);
  res.json(coffee);
});

export default coffeeRouter;
