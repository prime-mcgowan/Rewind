
// get the string from the page (controller function)
function getString() {

    document.getElementById("alert").classList.add("invisible") //classList will bring back all the classes on the alert element

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayReversedString(revString);

}

// reverse the string (logic function)
// userString is a parameter
function reverseString(userString) {

    let revString = []; //declares an empty array

    //for loop to reverse the string
    for (let index = userString.length -1; index >= 0; index--) {
        
        //reverseString will add a letter to itself on every loop starting with the last letter
        revString += userString[index];    
    }

    return revString;

}

// display the reversed string to the user (view function)
function displayReversedString(revString) {

    // display reversed string to the page (using a template literal to do so)
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}