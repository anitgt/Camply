if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
};

const sanitizeV5 = require('./utils/mongoSanitizeV5.js');
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session')
const ExpressError = require('./utils/ExpressError')
const methodOverride = require('method-override');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const helmet = require('helmet');

const userRoutes = require('./routes/users.js')
const campgroundRoutes = require('./routes/campgrounds.js');
const reviewRoutes = require('./routes/reviews.js');

mongoose.connect('mongodb://localhost:27017/Camply')
    .then(()=> {
        console.log('Connection Succesful')
    })
    .catch((err)=> {
        console.log('Connection Failed');
        console.log(err)
    })

const app = express();
app.set('query parser', 'extended');

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(sanitizeV5({ replaceWith: '_' }));


const sessionConfig = {
    name: 'session',
    secret: 'secret1',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        //secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash());
app.use(helmet({ contentSecurityPolicy: false }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error')
    next()
})

app.use('/', userRoutes)
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);

// app.get('/', (req,res) => {
//     res.send('On')
// })

app.get('/fakeUser', async(req,res) => {
    const user = new User({email: 'anit7795@gmail.com', username: 'anitt'});
    const newUser = await User.register(user, 'monkey');
    res.send(newUser)
})

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