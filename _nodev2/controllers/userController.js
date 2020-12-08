
//const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


const mysql = require('mysql');
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
});



exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};



exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Use /signup '
  });
};
