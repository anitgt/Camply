const mongoose = require('mongoose')
const Campground = require('../models/campground')
const { places, descriptors } = require('./seedHeplers')
const cities = require('../seeds/cities')

mongoose.connect('mongodb://localhost:27017/Camply')
    .then(()=> {
        console.log('Connection Succesful')
    })
    .catch((err)=> {
        console.log('Connection Failed'),
        console.log(err)
    })

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i <= 50; i++) {
        const random1000 = Math.floor(Math.random() *1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})