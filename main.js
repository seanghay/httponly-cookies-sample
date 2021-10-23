const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const { nanoid } = require('nanoid');
const datefns = require('date-fns');

app.use(helmet());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/id', (req, res) => {
  const userId = req.cookies['user_id']
  res.json({ userId });
})

app.get('/sign-in', (req, res) => {

  res.cookie("user_id", nanoid(), {
    expires: (datefns.addDays(new Date(), 30)),
    secure: true,
    httpOnly: true,
  });

  res.json({ message: 'Done' });
});

app.get("/sign-out", (req, res) => {
  res.clearCookie('user_id');
  res.json({ message: "Done" });
});



app.listen(3009, () => console.log('server is now listening on http://localhost:3009'));