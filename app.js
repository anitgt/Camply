const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const ejsMate = require('ejs-mate');



const ExpressError = require('./utils/ExpressError')
const methodOverride = require('method-override');

const campgrounds = require('./routes/campgrounds.js');
const reviews = require('./routes/reviews.js');

mongoose.connect('mongodb://localhost:27017/Camply')
    .then(()=> {
        console.log('Connection Succesful')
    })
    .catch((err)=> {
        console.log('Connection Failed'),
        console.log(err)
    })

const app = express();

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews)

// app.get('/', (req,res) => {
//     res.send('On')
// })







app.get('/', (req,res) => {
    res.render('home')
})



app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError('Page Not found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = 'Oh no, Something went wrong!';
    res.status(statusCode).render('error', { err });
});


app.listen(3000, () => {
    console.log('Listening at port 3000')
})