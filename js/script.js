/*window.onload = function getName (){
    let userName = prompt("Hey There! What's your name?");

    if (userName == null || userName == '') {
        userName = prompt('Come on, Whats your name?');
        if(userName == null || userName == '') {
            alert('Okay then, you do not have too tell me if you do not want too')
        }
    } else {
        confirm('Just making sure your name is ' + userName + '?')
        if (userName == null || userName == '') {
            userName = 'Guest'
        }
    }

    if (userName == null || userName == '') {
        userName = 'Guest';
    }

    alert('Thanks for your support ' + userName + '!')

    document.getElementById('jsName').innerHTML = userName + "!";
};

/*const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactNumber = document.getElementById('contact-number');
const contactMessage = document.getElementById('contact-message');
const contactError = document.getElementById('error');
const contactForm = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    let messages = []
    if (contactName.value === '' ||  contactName.value === null) {
        messages.push('Name is required')
    }
})*/


let toTopBtn = document.getElementById('top-btn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";   
    } else {
        toTopBtn.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}