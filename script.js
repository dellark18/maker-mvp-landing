// const email = document.getElementById("email");
// const form = document.querySelector("form");
// const errorMessage = document.getElementById("errorMessage");

// form.addEventListener("submit", (e) =>{
//     const errors = [];

//     if (errors.length > 0){
//         e.preventDefault();
//         errorMessage.toggleAttribute("hidden");
//         errorMessage.innerHTML = errors.join(", ");
//     }
// })

function validate() {
    const email = document.getElementById("email").value;
    var regEx = /\S+@\S+\.\S+/;
    if (regEx.test(email)) {
        document.getElementById("messageStatus").innerHTML = "";
    } else {
        document.getElementById("messageStatus").innerHTML = "Oops! That doesn’t look like an email address";
        messageStatus.toggleAttribute("hidden");
    }

}