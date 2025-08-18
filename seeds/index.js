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
        const price = Math.floor(Math.random() *20) + 10;
        const camp = new Campground({
            author: '6888878231cfb761207e925b',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat at voluptatum sint vel impedit accusantium hic eligendi unde commodi possimus ullam tenetur! Assumenda ea sunt nesciunt atque, similique quibusdam?',
            images: [
                {
                    url: `https://picsum.photos/400?random=${Math.random()}`,
                },
                {
                    url: `https://picsum.photos/400?random=${Math.random()}`,
                }
            ]
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})