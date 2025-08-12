// login form error
document.addEventListener("DOMContentLoaded", function () {
    const alertBox = document.getElementById("loginFormError");
    if (alertBox) {
        setTimeout(() => {
            alertBox.style.transition = "opacity 0.5s ease";
            alertBox.style.opacity = "0";
            setTimeout(() => alertBox.remove(), 500);
        }, 5000); // 5 seconds
    }
});


// signup form error
document.addEventListener("DOMContentLoaded", function () {
    const alertBox = document.getElementById("signUpError");
    if (alertBox) {
        setTimeout(() => {
            alertBox.style.transition = "opacity 0.5s ease";
            alertBox.style.opacity = "0";
            setTimeout(() => alertBox.remove(), 500);
        }, 5000); // 5 seconds
    }
});
