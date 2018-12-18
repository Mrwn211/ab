const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: [{ type: ObjectId, ref: "Author" }],
    rating: Number,
    reviews: [
      {
        user: String,
        comments: String
      }
    ]
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
