console.dir(document);

function alertWhenClicked1(event) {
    event.stopImmediatePropagation();
    alert("You've been alerted 1!");
}

function alertWhenClicked2(event) {
    // console.log(event);
    // event.stopPropagation();
    alert("You've been alerted 2!");
}

// Properties can be overwritten, only the second function will run.

// document.getElementById("mybutton").onclick = alertWhenClicked1;
// document.getElementById("mybutton").onclick = alertWhenClicked2;

// document.body.onclick = function() {
//     alert("The body was just clicked.");
// };

const mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", alertWhenClicked1);
mybutton.addEventListener("click", alertWhenClicked2);

document.querySelector("form").onsubmit = function(event) {
// Prevent default action of a form (refresh on button click)

    event.preventDefault();

// Select inputs being interacted with by the user

    const usernameInput = document.querySelector("#username-input");
    const passwordInput = document.querySelector("#password-input");

// Select target elements to inject user input values

    const usernameTarget = document.querySelector("#username");
    const passwordTarget = document.querySelector("#password");

// Inject user input into target elements

    usernameTarget.innerText = usernameInput.value;
    passwordTarget.innerText = passwordInput.value;

// Clear input after successful submission

    usernameInput.value = "";
    passwordInput.value = "";
}