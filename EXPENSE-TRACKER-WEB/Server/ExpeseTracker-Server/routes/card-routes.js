const express = require("express");
const {
  addCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

const router = express.Router();

router.post("/card", addCard);
router.get("/cards", getCards);
router.get("/card/:id", getCard);
router.put("/card/:id", updateCard);
router.delete("/card/:id", deleteCard);

module.exports = {
  routes: router,
};
