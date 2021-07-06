const express = require('express');
const bookRouter = require('./server/routes/book');
const userRouter = require('./server/routes/authRouter')

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter)

app.use('/books', bookRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});
app.listen(3000, () => console.log('listening to 3000...'));