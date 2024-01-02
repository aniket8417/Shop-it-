// import express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const OrderRouter = require('./routers/orderRouter');
const UtilRouter = require('./routers/util');

const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());

app.use('/user', UserRouter);
app.use('/order', OrderRouter);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));

// creating a route (routing)
app.get('/', (req, res) => {
    res.send('response from express server');
});

app.get('/add', (req, res) => {
    res.send('add response from server');
});

app.get('/getall', (req, res) => {
    res.send('getall response from server');
});

app.get('/update', (req, res) => {
    res.send('update response from server');
});

// starting express server
app.listen(port, () => { console.log('server started'); });