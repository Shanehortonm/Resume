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