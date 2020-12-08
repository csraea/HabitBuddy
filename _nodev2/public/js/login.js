/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
axios.defaults.headers.common = {'Authorization': `Bearer ${document.cookie.split('cookie1=')[1]}`}




//private set cookie function
function setCookie(name,value,days) {
  var expires = "";
  
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  
  document.cookie = 'cookie1='+value+expires+'; path=/'
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  axios.defaults.headers.common = {'Authorization': `Bearer ${document.cookie.split('cookie1=')[1]}`}

}


export const login = async (username, password) => {
  try {
    axios.defaults.headers.common = {'Authorization': `Bearer ${document.cookie.split('cookie1=')[1]}`}

    console.log(username+'\n'+password)
    const res = await axios({
      method: 'POST',
      //url: 'http://localhost:8080/api/auth/signin/',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        username,
        password
      }
    });
    console.log(res)
    console.log('res')
    if (res.data.status === 'success' || res.status === 200) {
     
      showAlert('success', 'Signed in!');  
      if(res.data.token)
      {
        setCookie('jwt',res.data.token,90);
      }
      window.setTimeout(() => {
       location.assign('/');
      }, 1500);
      //cookie

    }
  } catch (err) {
    console.log(err)
    showAlert('error', err.response.data.message);
  }
};

export const logout = async (flag,us,pw) => {
  try {
    axios.defaults.headers.common = {'Authorization': `Bearer ${document.cookie.split('cookie1=')[1]}`}

    let res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
      data: {
        cookie1:'loggedout'
      }
    });
    if ((res.data.status = 'success')) {
     
      setCookie('jwt','loggedout',0.00001);
      
      if(flag=='signup')
      {
        try {
          axios.defaults.headers.common = {'Authorization': `Bearer loggedout`}
      console.log('here the user gets logged in')
          
           res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/auth/signup',
            data: {
              username:us,
              password:pw
            }
          });
      
          if (res.data.status === 'success') {
           
            //showAlert('success', 'Registrovani!');  
                if(res.data.token)
            {
              setCookie('jwt',res.data.token,90);
            }
            window.setTimeout(() => {
             location.assign('/');
            }, 1500);
            //cookie
      
          }
        } catch (err) {
          showAlert('error', err.response.data.message);
        }



      }
      
      
      
      showAlert('success', 'See you soon again?');  
      window.setTimeout(() => {
        location.assign('/');
       }, 1500);
     
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Greška pri odjavi. Probajte ponovo.');
  }
};

export const signup = async (user) => {
  try {
    axios.defaults.headers.common = {'Authorization': `Bearer ${document.cookie.split('cookie1=')[1]}`}

    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',

      data: {
        username:user.username,
        password:user.password,
        name:user.name,
        email:user.email,
        passwordConfirm:user.passwordConfirm
      }
    });
    console.log(res)
    if (res.data.status === 'success' || res.status === 200) {
      
      //showAlert('success', 'Uspješno registrovani!');
      

     /*  window.setTimeout(() => {
       location.assign('/');
      }, 1500); */
      //cookie
      
      if(res.data.token)
      {
        setCookie('jwt',res.data.token,90);
      }
      
      console.log(res.data)
      try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${document.cookie.split('cookie1=')[1]}`}
    
        
        const res = await axios({
          method: 'POST',
          url: 'http://127.0.0.1:3000/api/v1/users/login',
          data: {
            username:user.username,
            password:user.password,
          }
        });
    console.log(res)
        if (res.data.status === 'success' || res.status === 200) {
          
          showAlert('success', 'Uspješno registrovani!');  
          if(res.data.accessToken)
          {
            setCookie('jwt',res.data.accessToken,90);
          }
          window.setTimeout(() => {
           location.assign('/');
          }, 1500);
          //cookie
    
        }
      } catch (err) {
        showAlert('error', err.response.data.message);
      }




    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    
  }
};