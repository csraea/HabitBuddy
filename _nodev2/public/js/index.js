/* eslint-disable */
import '@babel/polyfill';
import { login, logout,signup } from './login';
  
// DOM ELEMENTS

const loginForm = document.querySelector('.form--login');

const signupForm = document.querySelector('.button--register');
const logOutBtn = document.querySelector('.logout--button');







if (loginForm)
  loginForm.addEventListener('submit', e => {
   
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
  });



if (signupForm)
  signupForm.addEventListener('click', e => {
   
    e.preventDefault();
    let user=new Object(); 
    user['username'] = document.getElementById('username').value;
    user['password'] = document.getElementById('password').value;
    user['name'] = document.getElementById('name').value;
    user['email'] = document.getElementById('email').value;
    user['passwordConfirm'] = document.getElementById('password-confirm').value;
   
   
  signup(user);
  
  
  

  });

if (logOutBtn) 
  logOutBtn.addEventListener('click', e => logout('logout'));











// background
let time=new Date().valueOf();
if(time%4==0)
  document.body.style.backgroundImage = 'linear-gradient(to bottom,rgba(98, 98, 98, 0.64), rgba(34, 215, 16, 0.44)),url("/img/maps/map5.png")';
else if(time%4==2)
  document.body.style.backgroundImage = 'linear-gradient(to bottom, rgba(128, 93, 98, 0.64), rgba(34, 215, 16, 0.44)),url("/img/maps/map2.png")';
else if(time%4==1)
  document.body.style.backgroundImage = 'linear-gradient(to bottom,rgba(93, 108, 93, 0.64), rgba(34, 215, 16, 0.44)),url("/img/maps/map3.png")';
else
  document.body.style.backgroundImage = 'linear-gradient(to bottom, rgba(78, 99, 98, 0.64), rgba(34, 215, 16, 0.44)),url("/img/maps/map4.png")';





