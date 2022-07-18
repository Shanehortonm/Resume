 window.onload = function(){
    let name = prompt("Hey There! What's your name?");
    confirm("Just double checking, your name is " + name + " right?")
    let userName = name


    
    
    document.getElementById('jsName').innerHTML = userName + "!";
};


/*let userName = prompt ('Yo What your name is?');
confirm ('Just making sure your name is ' + userName + ('?'));
alert ('Welcome ' + userName + ('!'));

/*if (userName = null) {
    prompt ('Yo foreal what your name is?');
} else {
    confirm ('Just making sure your name is ' + userName + ('?'));
alert ('Welcome ' + userName + ('!'));
}


document.getElementById('jsName').innerHTML = userName + '!';*/


const contactName = document.getElementById('contact-name');
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
})
