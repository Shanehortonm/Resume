let user = "";

window.onload = function getName (){
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

    user = userName;

    alert('Thanks for your support ' + userName + '!')

    document.getElementById('jsName').innerHTML = userName + "!";
};

function contactMe() {
    let email = document.getElementById("contact-email").value;
    let contactName = document.getElementById("contact-name").value;

    if (!contactName) {
        contactName = user;
    };

    const newLocal = ".";
    if ( !(email.includes("@") || email.includes(".")) ) {
        alert("Please enter a valid Email!");
    } else {
        alert(`Thank you for your interest, ${contactName}!`)
    };
}




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