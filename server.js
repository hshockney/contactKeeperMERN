const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
//Connect database
connectDB();
//Init middleware
app.use(express.json({ extended: false }));

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
//Serve static assets on production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'cient', 'build', 'index.html'))
  );
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
