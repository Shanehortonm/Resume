window.onload = function(){
    let name = prompt("Hey There! What's your name?");
    let userName = name;

    if (userName == null || userName == '') {
        prompt('Come on, Whats your name?')
        if(userName == null || userName == '') {
            prompt('Okay then, you do not have too tell me if you do not want too')
        } else {
            
        }
    } else {
        let userNameConfirm = confirm('Just making sure your name is ' + userName + '?')
        if (userNameConfirm == null) {
            userName = 'Guest'
        }
        alert('Thanks for stopping by ' + userName)
    }

    if (userName == null) {
        userName = 'Guest';
    }

    document.getElementById('jsName').innerHTML = userName + "!";
};





































/*let userName = prompt ('Yo What your name is?');
confirm ('Just making sure your name is ' + userName + ('?'));
alert ('Welcome ' + userName + ('!'));

/*if (userName = null) {
    prompt ('Come on now, what is your name?');
} else {
    confirm ('Just making sure your name is ' + userName + ('?'));
alert ('Welcome ' + userName + ('!'));
}


document.getElementById('jsName').innerHTML = userName + '!';*/


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
