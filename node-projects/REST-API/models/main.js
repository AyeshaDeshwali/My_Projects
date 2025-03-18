const express = require("express");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  restapi: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: String,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

const restapi = new mongoose.model("user", userSchema);
module.exports = restapi;
