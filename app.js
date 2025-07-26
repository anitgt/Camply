const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const ejsMate = require('ejs-mate');
const { campgroundSchema, reviewSchema } = require('./schemas.js')
const Campground = require('./models/campground');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError')
const methodOverride = require('method-override');
const Review = require('./models/review.js')

const campgrounds = require('./routes/campgrounds.js')

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
app.use(methodOverride('_method'))

// app.get('/', (req,res) => {
//     res.send('On')
// })

const validateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body);
    if(error) {
        const msg = error.details.map(el =>  el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}



app.use('/campgrounds', campgrounds)

app.get('/', (req,res) => {
    res.render('home')
})

app.post('/campgrunds/:id/reviews', validateReview, catchAsync(async(req,res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}));

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