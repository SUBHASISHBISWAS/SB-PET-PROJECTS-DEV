"use strict";

const firebase = require("../db");
const Card = require("../models/card");
const firestore = firebase.firestore();

const addCard = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("Cards").doc().set(data);
    res.send("Record Save Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCards = async (req, res, next) => {
  try {
    const data = await firestore.collection("Cards");
    const cards = await data.get();
    const all_cards = [];
    if (cards.empty) {
      res.status(400).send("No Card Found");
    } else {
      cards.forEach((card) => {
        const aCard = new Card(
          card.id,
          card.data().cardName,
          card.data().cardNumber
        );
        all_cards.push(aCard);
      });
      res.send(all_cards);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCard = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await firestore.collection("Cards").doc(id);
    const card = await data.get();
    if (!card.exists) {
      res.status(400).send("No Card Found");
    } else {
      const aCard = new Card(
        card.id,
        card.data().cardName,
        card.data().cardNumber
      );
      res.send(aCard);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateCard = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const card = await firestore.collection("Cards").doc(id);
    await card.update(data);
    res.send("Card Updated Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("Cards").doc(id).delete();
    res.send("Card Deleted Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addCard,
  getCard,
  getCards,
  updateCard,
  deleteCard,
};
