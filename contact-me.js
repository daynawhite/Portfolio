
// const placeForResults = document.getElementById("results")

// new URLSearchParams(window.location.search).forEach((value, name) => {
//   placeForResults.append(`${name} : ${value}`)
//   placeForResults.append(document.createElement("br"))
// })
console.log('hello world')

const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const comments = document.getElementById('comments');
const message = document.querySelector('.message');
const ageInput = document.getElementById('age');
// console.log(form)
// console.log(nameInput.value)
// console.log(emailInput)
// console.log(comments)
let username;
let email;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    username = nameInput.value;
    email = emailInput.value;
    age = ageInput.value;

    const p = document.createElement('p');
    p.textContent = `Hi ${username} welcome to the site! You've signed in as ${email}`;

    message.appendChild(p);

    const ageP = document.createElement('p');
    ageP.textContent = `age: ${age}`

    message.appendChild(ageP);
})

nameInput.addEventListener('input',function(event) {
    username = event.target.value;
})
console.log(username)

emailInput.addEventListener('input', function(event){
})
