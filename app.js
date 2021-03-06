const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const index = require('./routes/index');
const products = require('./routes/products');
const categories = require('./routes/categories');
const api = require('./routes/api/users');
const seeder = require('./routes/seeder/products');
const stripe = require("stripe")('PRIVT_KEY');
const passport  = require("passport")

const app = express();

//map global promise - get rid of warning
mongoose.promise=global.promise;

// mongoose.connect( 'mongodb://localhost/vueexpress',
  
mongoose.connect( 'mongodb+srv://user:user@cluster0-vehxj.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,
  useUnifiedTopology: true 
})
.then(()=> console.log(' DB connected'))
.catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())
require("./config/passport")(passport)

app.use('/api', api);
app.use('/', index);
app.use('/products', products);
app.use('/categories', categories);
app.use('/seeder', seeder);
app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname,'public/index.html'))
})
app.post("/charge", (req, res, next) => {
  let amount = req.body.total*100;

  stripe.customers.create({
    email: req.body.stripeToken.email,
    source: req.body.stripeToken.id
    //  source == stripeToken.id not just stripeToken
  })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Ecommerce Shopping Cart",
        currency: "usd",
        customer: customer.id
      }))
    .then(charge => res.json(req.body.stripeToken));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
