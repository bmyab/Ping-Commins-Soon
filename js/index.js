const form= document.getElementById('form');
 
form.addEventListener('submit', e =>{
  e.preventDefault();

  const email = form['email'];
  const emailValue = email.value;
  const small = form.querySelector('small');

  if( !emailValue){
    email.classList.add('error');
    small.innerText = 'Email field cannot be empty';
    small.style.display = 'block';
  }else if( !isValid(emailValue)){
    email.classList.add('error');
    small.innerText = 'Please provide a valid email address';
    small.style.display = 'block';
  }else{
    email.classList.remove('error');
    small.style.display= 'none';
  }
})

function isValid(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}