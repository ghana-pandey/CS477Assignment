const express = require('express');
const userRouter=require('../server/router/authRouter')
const mongoConect=require('../utils/database').mongoConnect;

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter)


app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});
mongoConect(()=>{
    app.listen(3000, () => console.log('listening to 3000...'));
})
