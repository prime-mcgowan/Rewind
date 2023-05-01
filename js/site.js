
//Get the string from the page
//controller function
function getString() {

    document.getElementById("alert").classList.add("invisible") //classList will bring back all the classes on the alert element

    let userString = document.getElementById("userString").value;
    let reverseString = reverseString(userString);
    displayReversedString(reverseString);
}

//Reverse the string
//logic function
//userString is a parameter
function reverseString(userString) {

}

//Display the reversed string to the user
//view function
function displayReversedString() {

}