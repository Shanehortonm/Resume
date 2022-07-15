let gotName = false;

while (gotName == false){
    let userName = prompt("Hey there! What is your name?")
    if (confirm ("Just double checking, your name is " + userName + "?")){
    alert (" Welcome to my Resume page " + userName + "!")}
    gotName = true;
}

