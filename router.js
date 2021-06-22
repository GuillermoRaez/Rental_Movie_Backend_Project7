const router = require('express').Router();

const moviesRouter = require('./routes/moviesRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const orderRouter = require('./routes/orderRouter');

router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/movies', moviesRouter);
router.use('/login', loginRouter);

module.exports = router;

