var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecial;
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {
    
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
     
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmLowercase = confirm("Will this contain Lowercase letters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmNumber = confirm("Will this contain numbers?");
        confirmSpecial = confirm("Will this contain special characters?");
    };

    
    if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
        choices = alert("You must choose a criteria!");

    }
   
    else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {

        choices = alpha.concat(alpha2, number, special);
    }
    
    else if (confirmUppercase && confirmNumber && confirmSpecial) {
        choices = alpha2.concat(number, special);
    }
    else if (confirmLowercase && confirmNumber && confirmSpecial) {
        choices = alpha.concat(number, special);
    }
    else if (confirmLowercase && confirmUppercase && confirmSpecial) {
        choices = alpha.concat(alpha2, special);
    }
    else if (confirmLowercase && confirmUppercase && confirmNumber) {
        choices = alpha.concat(alpha2, number);
    }
   
    else if (confirmNumber && confirmSpecial) {
        choices = number.concat(special);

    } else if (confirmLowercase && confirmSpecial) {
        choices = alpha.concat(special);

    } else if (confirmUppercase && confirmSpecial) {
        choices = alpha2.concat(special);
    }
    else if (confirmLowercase && confirmNumber) { 
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmUppercase && confirmNumber) {
        choices = alpha2.concat(number);
    }
    
    else if (confirmSpecial) {
        choices = special;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

   
    var password = [];

   
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
