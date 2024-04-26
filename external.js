const email = document.getElementById('email')
var eye = document.getElementById('eye');
const pwd = document.getElementById('pwd')
const form = document.getElementById('form')
const errorELement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages=[]
    if(email.value === '' || email.value == null) {
        messages.push('Email is required')
    }


    if(pwd.value.length <= 6){
       messages.push   ('password must be longer by 6 characters') 
    }


    if(pwd.value.length >= 20){
        messages.push('password must be less than 20 characters')
        
    }
   


    if(messages.length > 0){
       e.preventDefault()  //To prevent our form from submitting
       errorELement.innerText = messages.join(', ')
      }
    })
    

    eye.addEventListener('click',showeyecolor);
   errorELement.style.color= 'purple'

    function showeyecolor(){
      eye.classList.toggle('active');
      (pwd.type == 'password') ? pwd.type = 'text' : 
       pwd.type = 'password';
     
    }
    function confirmNavigation() {
        var confirmation = window.confirm("Are you sure you want to proceed to the About me page?");
        if (confirmation) {
            // If user confirms, navigate to the About me page
            window.location.href = "About me.html"; // Replace "about-me.html" with the URL of your About me page
        } else {
            // If user cancels, do nothing or provide an alternative action
            return;
        }
    }