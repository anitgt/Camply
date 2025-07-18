const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const ejsMate = require('ejs-mate')
const Campground = require('./models/campground')
const methodOverride = require('method-override')

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


app.get('/', (req,res) => {
    res.render('home')
})

app.get('/campgrounds', async (req,res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
})


app.get('/campgrounds/new', (req,res) => {
    res.render('campgrounds/new')
})

app.post('/campgrounds', async(req,res,next) => {
    try {
        const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`campgrounds/${campground.id}`)
    } catch (e) {
        next(e)
    }
    
})


app.get('/campgrounds/:id', async(req,res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show', {campground})
})

app.get('/campgrounds/:id/edit', async (req,res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', {campground})
})

app.put('/campgrounds/:id', async(req,res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground});
    res.redirect(`/campgrounds/${campground.id}`)
})

app.delete('/campgrounds/:id', async(req,res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
})

app.use((err,req,res,next) => [
    res.send('Damn something went wrong!')
])

app.listen(3000, () => {
    console.log('Listening at port 3000')
})