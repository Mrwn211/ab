const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectID = require('mongodb').ObjectID;

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: [ { type : ObjectID, ref: 'Author' } ],
    rating: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
