 window.onload = function(){
    let name = prompt("Hey There! What's your name?");
    confirm("Just double checking, your name is " + name + " right?")
    let userName = name


    document.getElementById('jsName').innerHTML = userName + "!";
};
