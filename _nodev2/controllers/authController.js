const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
//const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');
const bcrypt = require('bcryptjs');

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




















const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, res) => {
  console.log(user)
  const token = signToken(user.id);
  console.log(token)
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);
 
  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  }); 
};

exports.signup = catchAsync(async (req, res, next) => {
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, 8)

  const newUser =
  {
    "email": req.body.email,
    "username":req.body.username,
    "password":encryptedPassword
  }

/*   const newUser = await User.create({
    email: req.body.email,
    username:req.body.username,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  }); */
  
  connection.query('INSERT INTO users SET ?',newUser, function (error, results, fields) {
      if (error) 
      {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      } 
      else 
      {
        createSendToken(newUser, 201, res);
        }
    });

  
});


exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

/*   // 1) Check if email and password exist
  if (!username || !password) {
    return next(new AppError('Unesite korisničko ime i lozinku!', 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ username }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('incorrect', 401));
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, res); */


  let user

  connection.query('SELECT * FROM users WHERE username = ?',[username], async function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      if(results.length >0){
        const comparision = await bcrypt.compare(password, results[0].password)
        if(comparision){
          
            user=(JSON.parse(JSON.stringify(results[0])));
            createSendToken(user, 200, res);
        }
        else{
          res.send({
               "code":400,
               "fail":"Username and password does not match"
          })
        }
      }
      else{
        res.send({
          "code":400,
          "success":"Username does not exits"
            });
      }
    }
    });

    

});

exports.logout = (req, res) => {
  console.log(req.cookies);
  console.log('in loggout')
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  console.log(req.cookies);
  res.status(200).json({ status: 'success' });
};

/*
exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;

  console.log('in isLoggedIn')
  console.log(req.headers)
 console.log(req.cookies)
 console.log(req.body)
 console.log('in isLoggedIn')



  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  else if (req.body.jwt) {
    token = req.body.jwt;
  }
  if (!token) {
    return next(
      new AppError('Not logged in!', 401)
    );
  }
  console.log(token)

if(token==='undefined')
{
  console.log('test\n\n\n\n\n'+req.route+'\n\n')
  next();
}


  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'Doesnt exist.',
        401
      )
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('Changed pass. Sign in again.', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});
*/


// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
  
if(req.body.cookie1=='loggedout' || req.cookies.cookie1=='loggedout' || !req.cookies.cookie1)
  {
    return next();
  
  };

  if (req.cookies.jwt) {
    
    
    try {
      // 1) verify token

      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      console.log('decoded')
      // 2) Check if user still exists
      let currentUser 
      console.log(decoded.id)
      
      connection.query('SELECT * FROM users WHERE id = ?',[decoded.id], (err,rows) => {
        if(err) throw err;
        
        currentUser= (JSON.parse(JSON.stringify(rows[0])));
        
      if (!currentUser) {
        
        return next();
      }

      res.locals.user = currentUser;
      req.user = currentUser;


      return next();

      });

    } catch (err) {
      return next();
    }
  }
  //next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('Not permitted', 403)
      );
    }

    next();
  };
};


/*
connection.end(function(){
  // The connection has been closed
});
*/


