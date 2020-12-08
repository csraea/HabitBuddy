
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('Whoopsie! 💥 ');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE_LOCAL


/* const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'GRNVZr9ti1',
  password : '38O7SNyCxc',
  database : 'GRNVZr9ti1'
});

connection.connect(function(err) {
  // in case of error
  if(err){
      console.log(err.code);
      console.log(err.fatal);
  }
}); */

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
