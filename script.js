
// let nameBox = document.querySelector('#name');
// querySelector
// getElementById
// getElementsByClassName
let form = document.querySelector('form');
let nameBox = document.getElementById('name');
let emailBox = document.getElementById('email');
let passwordBox = document.getElementById('password');
let confirmPasswordBox = document.getElementById('confirm-password');
let submitButton = document.getElementById('submit');
let userDiv = document.getElementsByClassName('users')[0];


// submitButton.addEventListener('click', validateForm);

form.addEventListener("submit", validateForm);


function validateForm(e){
    e.preventDefault();
    let name = nameBox.value;
    let email = emailBox.value;
    let password = passwordBox.value;
    let confirmPassword = confirmPasswordBox.value;

    if(name == "" || email == "" || password == "" || confirmPassword == ""){
        alert('All fields are required');
        return
    }
    // if(name.length<4){
    //     alert('Name is too short');
    //     return
    // }
    if(email.indexOf('@') == -1){
        alert('Invalid email');
        return
    }
    if(password !== confirmPassword){
        alert('Passwords do not match');
        return
    }


    // console.log("Form submiited successfulyy")

    userDiv.innerHTML =  userDiv.innerHTML +`
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `

    nameBox.value = "";
    emailBox.value = "";
    passwordBox.value = "";
    confirmPasswordBox.value = "";
}


// change event, input event
nameBox.addEventListener("input" , validateName)

let spanName = document.getElementById('nameSpan');
function validateName(){
    // console.log("Hello")
    // console.log("Hii", nameBox.value)
    if(nameBox.value.length<4){
        nameBox.style.border = "2px solid red";
        nameBox.style.outline = "none";
        spanName.innerText = "Name is too short";
        
    }
    else{
        nameBox.style.border = "2px solid green";
        nameBox.style.outline = "none";
        spanName.innerText = "";
    }
}