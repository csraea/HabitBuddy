

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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


exports.getOverview = catchAsync(async (req, res, next) => {

if  (req.user)
  {
    let trackedHabits
    connection.query('SELECT * FROM UsersHabits, Habits WHERE id_habit=Habits.id  AND id_user = ?',req.user.id, function (error, results, fields) {
      if (error) 
      {
        res.send({
          "code":400,
          "failed":"error occurred while fetching overviews"
        })
      } 
      else 
      {
        trackedHabits=(JSON.parse(JSON.stringify(results)));
          res.status(200).render('overview', {
          title: 'Welcome to HabitBuddy!',
          user: req.user,
          trackedHabits:trackedHabits,
      
        });



        }
    });






  }
  else
  {
    res.status(200).render('overviewOut', {
      title: 'Welcome to HabitBuddy!',
      user: req.user,
      
    });
  }
});




exports.getHabit = catchAsync(async (req, res, next) => {
  let trackedHabits

  connection.query('SELECT * FROM UsersHabits, Habits WHERE id_habit=Habits.id  AND id_user = ?',req.user.id, function (error, results, fields) {
    if (error) 
    {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } 
    else 
    {
      trackedHabits=(JSON.parse(JSON.stringify(results)));
      
      let thisHabitDetails
      connection.query('SELECT * FROM Habits, Milestones WHERE Habits.id=Milestones.habit_id AND Habits.id = ? ORDER BY `Milestones`.`id` ASC',req.params.id, function (error, results, fields) {
        if (error) 
        {
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        } 
        else 
        {
          thisHabitDetails=(JSON.parse(JSON.stringify(results)));
          let thisHabit
          connection.query('SELECT * FROM UsersHabits WHERE id_habit = ? AND id_user = ? ',[req.params.id, req.user.id], function (error, results, fields) {
            if (error) 
            {
              res.send({
                "code":400,
                "failed":"error ocurred"
              })
            } 
            else 
            {
              thisHabit=(JSON.parse(JSON.stringify(results[0])));
              console.warn("how did we even get here?")
                res.status(200).render('habitDetail', {
                title: 'Welcome to HabitBuddy!',
                user: req.user,
                trackedHabits:trackedHabits,
                thisHabit:thisHabit,
                thisHabitDetails:thisHabitDetails
            
              });
      
      
      
              }
          });
  
  
          }
      });
    
     


      }
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Login'
  });
};

exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Register'
  });
};


/*
exports.getOverview = catchAsync(async (req, res, next) => {

if  (req.user)
  {
    let trackedHabits
    connection.query('SELECT * FROM UsersHabits, Habits WHERE id_habit=Habits.id  AND id_user = ?',req.user.id, function (error, results, fields) {
      if (error) 
      {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      } 
      else 
      {
        trackedHabits=(JSON.parse(JSON.stringify(results)));
          res.status(200).render('overview', {
          title: 'Welcome to HabitBuddy!',
          user: req.user,
          trackedHabits:trackedHabits,
      
        });



        }
    });






  }
  else
  {
    res.status(200).render('overviewOut', {
      title: 'Welcome to HabitBuddy!',
      user: req.user,
      
    });
  }
});




exports.getHabit = catchAsync(async (req, res, next) => {
  let trackedHabits
  connection.query('SELECT * FROM UsersHabits, Habits WHERE id_habit=Habits.id  AND id_user = ?',req.user.id, function (error, results, fields) {
    if (error) 
    {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } 
    else 
    {
      trackedHabits=(JSON.parse(JSON.stringify(results)));

      let thisHabit
      connection.query('SELECT * FROM Habits, Milestones WHERE Habits.id=Milestones.habit_id AND Habits.id = ? ORDER BY `Milestones`.`id` ASC',req.params.id, function (error, results, fields) {
        if (error) 
        {
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        } 
        else 
        {
          thisHabit=(JSON.parse(JSON.stringify(results)));
            res.status(200).render('habitDetail', {
            title: 'Welcome to HabitBuddy!',
            user: req.user,
            trackedHabits:trackedHabits,
            thisHabit:thisHabit
        
          });
  
  
  
          }
      });
    
     


      }
  });
});

*/

exports.getNewHabit = catchAsync(async (req, res, next) => {
  let trackedHabits
  connection.query('SELECT * FROM UsersHabits, Habits WHERE id_habit=Habits.id  AND id_user = ?',req.user.id, function (error, results, fields) {
    if (error) 
    {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } 
    else 
    {
      trackedHabits=(JSON.parse(JSON.stringify(results)));

      let AllHabits
      connection.query('SELECT * FROM Habits', function (error, results, fields) {
        if (error) 
        {
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        } 
        else 
        {
          AllHabits=(JSON.parse(JSON.stringify(results)));
            res.status(200).render('addNewHabit', {
            title: 'Welcome to HabitBuddy!',
            user: req.user,
            trackedHabits:trackedHabits,
            AllHabits:AllHabits
        
          });
  
  
  
          }
      });
    
     


      }
  });
});

/*

exports.getUserEdit = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested recipe (including reviews and guides)

  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    return next(new AppError('Taj korisnik ne postoji.', 404));
  }

  
  // 2) Build template
  
  // 3) Render template using data from 1)
  res.status(200).render('admin/users/edit', {
    title: `Izmjena korisnika`,
    user,

  });
});

connection.end(function(){
  // The connection has been closed
});
*/

