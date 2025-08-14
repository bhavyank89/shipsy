import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use('/', (req, res) => {
    res.send("Server Is Safe");
})
app.listen(port, () => {
    console.log('server running at : ', `http://localhost:${port}/`);
});