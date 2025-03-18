const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Make sure 'required' is set to true
    },
    email: {
      type: String,
      required: true, // Make sure 'required' is set to true
    },
    password: {
      type: String,
      required: true, // Make sure 'required' is set to true
    },
    age: {
      type: Number,
    },

    dateOfBirth: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String, // Ensure it's a String to store the file path
      // required: false,
    },
    phoneNumber: { type: String, unique: false },
    gender: {
      type: String,
    },
    bio: {
      type: String,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalCode: {
        type: String,
      },
    },
  },
  {
    timestamps: true, // Correctly specify timestamps as an option
  }
);

module.exports = mongoose.model("User", userSchema);
