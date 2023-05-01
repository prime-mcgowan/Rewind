
//Get the string from the page
//controller function
function getString() {

    document.getElementById("alert").classList.add("invisible") //classList will bring back all the classes on the alert element

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayReversedString(revString);
}

//Reverse the string
//logic function
//userString is a parameter
function reverseString(userString) {

    let revString = []; //declares an empty array

    //for loop to reverse the string
    for (let index = userString.length -1; index >= 0; index--) {
        
        //reverseString will add a letter to itself on every loop
        revString += userString[index];    
    }

    return revString;

}

//Display the reversed string to the user
//view function
function displayReversedString(revString) {

    //display reversed string to the page
    //use a template literal
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}