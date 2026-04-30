let login=document.querySelector('.login');
let span=document.querySelector('.signup-span');
let signup=document.querySelector('.signup');
span.onclick=function(){
  signup.style.display='none';
  login.style.display='block';
}
let show=document.querySelector('.login-span');
show.onclick=function(){
  signup.style.display='block';
  login.style.display='none';
}

// localStorage for signup page
let signup_form=document.querySelector('.signup_form');
let username=document.querySelector('.username');
let email=document.querySelector('.email');
let phone=document.querySelector('.phone');
let password=document.querySelector('.password');
let signup_btn=document.querySelector('.btn');
signup_form.onsubmit=function(){
  let user={
    Name:username.value,
    Email:email.value,
    Phone:phone.value,
    Password:password.value
  };
  if(username.value!=='' && email.value!=='' && phone.value!=='' && password.value!==''){
  localStorage.setItem(email.value,JSON.stringify(user));
  signup_btn.style.background='#14b129';
  signup_btn.innerHTML='<i class="fa-regular fa-circle-check"></i> Sign up Successful !';
  setTimeout(test,3000)
  function test(){
    signup_btn.innerHTML='Sign up';
    signup_btn.style.background='linear-gradient(90deg, rgba(96, 37, 245, 0.2) 1%, rgba(255, 85, 85, 0.2) 100%)';
    signup_form.reset();
  }
  return false;
  }  
}

let msg=document.querySelector('.email-msg');
email.onchange=function(){
  if(localStorage.getItem(email.value)!== null){
    msg.style.display='block';
    signup_btn.disabled=true;
    signup_btn.style.background='#ccc';    
    email.onclick=function(){
    email.value='';
    msg.style.display='none';
    signup_btn.disabled=false;
    signup_btn.style.background='linear-gradient(90deg, rgba(96, 37, 245, 0.2) 1%, rgba(255, 85, 85, 0.2) 100%)';
}
  }  
}

// login coding started
let login_form=document.querySelector('.login-form');
let login_email=document.querySelector('.login-email');
let login_pass=document.querySelector('.login-pass');
let login_msg=document.querySelector('.login-msg');
let pass_msg=document.querySelector('.pass-msg');
login_form.onsubmit=function(){
  if(localStorage.getItem(login_email.value)==null){
    login_msg.style.display='block';
    login_email.onclick=function(){
      login_email.value='';
      login_msg.style.display='none';
    }
  }
  else{
    let text_data=localStorage.getItem(login_email.value);
    let obj_data=JSON.parse(text_data);
    let set_email=obj_data.Email;
    let set_pass=obj_data.Password;
    if(login_email.value==set_email){
      if(login_pass.value==set_pass){
        sessionStorage.setItem('user',login_email.value);
        window.location.replace('profile/index.html');
      }
      else{
        pass_msg.style.display='block';
        login_pass.onclick=function(){
          login_pass.value='';
          pass_msg.style.display='none';
        }
      }
    }
  }
  return false;
}

