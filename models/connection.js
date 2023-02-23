const mongoose = require('mongoose');

<<<<<<< HEAD
const connectionString = process.env.CONNECTION_STRING;
=======
const connectionString = 'mongodb+srv://admin:Bassman75011@cluster0.ipnlyqf.mongodb.net/wordle';
>>>>>>> 841fe89 (first commit)

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
