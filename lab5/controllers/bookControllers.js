const Book=require('../models/book')
module.exports.getAllBooks=((req,res,next)=>{
    res.status(200).json(Book.getAll());

})
module.exports.getBookById=((req,res,next)=>{
    res.status(200).json(Book.findById(req.params.bookId))
})
module.exports.save=((req,res,next)=>{
    const book = req.body;
    const savedBook = new Book(null, book.title, book.ISBN, book.publishedDate, book.author).save();
    res.status(201).json(savedBook);
})
exports.update = (req, res, next) => {
    const book = req.body;
    const updatedBook = new Book(req.params.bookId, book.title, book.isbn, book.publishedDate, book.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.bookId);
    res.status(200).end();
}