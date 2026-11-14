
function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;
    toast.className = "toast";

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}

function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Please fill in the booking form!");
}

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {
    button.addEventListener("click", scrollToBooking);
});

