const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const Campground = require('./models/campground')

mongoose.connect('mongodb://localhost:27017/Camply')
    .then(()=> {
        console.log('Connection Succesful')
    })
    .catch((err)=> {
        console.log('Connection Failed'),
        console.log(err)
    })

const app = express();



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.send('On')
})


app.get('/home', (req,res) => {
    res.render('home')
})

app.get('/campgrounds', async (req,res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
})

app.listen(3000, () => {
    console.log('Listening at port 3000')
})