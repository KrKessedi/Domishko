const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');
const PORT = process.env.PORT || 3001;
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const bookRouter = require('./routes/book');
// const cartRouter = require('./routes/cart');
// const orderRouter = require('./routes/order');
// const stripeRouter = require('./routes/stripe');
const cors = require('cors');

dbConnect();

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter);
// app.use('/carts', cartRouter);
// app.use('/orders', orderRouter);
// app.use('/checkout', stripeRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
