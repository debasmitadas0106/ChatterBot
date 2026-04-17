const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: String,
    phone: String,
    firstName: String,
    lastName: String,
    interests: Array,
  },
  {
    timestamps: true,
  },
);
module.exports = userSchema;
