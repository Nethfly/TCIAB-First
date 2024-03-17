"use strict"

/*const entrada = prompt ("Enter your Name")
console.log (entrada);
switch(entrada){
    case "":
        document.write("Hello There! Youngling");
        break;
    default:
        document.write("Hello There "+ entrada + ", Welcome to the Jedi Academy");
        break;
}*/

//Uso combinado de if, else y switch
const entrada = prompt ("Enter your name");
console.log (entrada);
if(entrada==null){
        document.write("Are you sure of cancelling?");
}else{
switch(entrada){
    case "":
        document.write("Hello there!");
        break;
    default:
        document.write("Hello There "+ entrada + ", this is my first web page");
    break;
}
}