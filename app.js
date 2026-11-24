
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



// Live Booking Summary



const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");



const summaryMatch = document.querySelector("#summaryMatch");
const summaryStand = document.querySelector("#summaryStand");
const summaryPrice = document.querySelector("#summaryPrice");
const summaryQuantity = document.querySelector("#summaryQuantity");
const summaryTotal = document.querySelector("#summaryTotal");



const ticketPrices = {
    "RCB vs CSK": {
        General: 800,
        Premium: 1500,
        VIP: 3000
    },

    "MI vs KKR": {
        General: 900,
        Premium: 1800,
        VIP: 3500
    },

    "SRH vs CSK": {
        General: 700,
        Premium: 1400,
        VIP: 2800
    }
};



function updateBookingSummary(showNotification = true) {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;

    const quantity = Number(quantityInput.value);

    

    const validQuantity =
        Number.isInteger(quantity) &&
        quantity >= 1 &&
        quantity <= 10;

    

    let price = 0;

    if (
        selectedMatch &&
        selectedStand &&
        ticketPrices[selectedMatch]
    ) {
        price = ticketPrices[selectedMatch][selectedStand];
    }

    

    const total = validQuantity ? price * quantity : 0;

    

    summaryMatch.textContent = selectedMatch || "Not Selected";

    summaryStand.textContent = selectedStand || "Not Selected";

    summaryPrice.textContent =
        "₹" + price.toLocaleString("en-IN");

    summaryQuantity.textContent =
        validQuantity ? quantity : 0;

    summaryTotal.textContent =
        "₹" + total.toLocaleString("en-IN");

    

    if (showNotification) {
        showToast("Booking Summary Updated!");
    }
}



matchSelect.addEventListener("change", function () {
    updateBookingSummary();
});



standSelect.addEventListener("change", function () {
    updateBookingSummary();
});



quantityInput.addEventListener("input", function () {
    updateBookingSummary(false);
});

quantityInput.addEventListener("change", function () {
    updateBookingSummary();
});




const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("active");

    const isOpen = mainNav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});




const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function () {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(function (card) {

        const teams = card.dataset.teams.split(" ");

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

    showToast("Match Filter Updated!");

});




const gridViewButton = document.getElementById("gridView");
const listViewButton = document.getElementById("listView");
const matchGrid = document.getElementById("matchGrid");


gridViewButton.addEventListener("click", function () {

    matchGrid.classList.remove("list-view");

    showToast("Grid View Selected!");

});


listViewButton.addEventListener("click", function () {

    matchGrid.classList.add("list-view");

    showToast("List View Selected!");

});

