const book = require("../model/book");

const getBook = async (req, res) => {
  try {
    const books = await book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getBook;
