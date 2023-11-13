// Modal window 
// Select all elements with the attribute data-modal-target
const openModalButtons = document.querySelectorAll('[data-modal-target]');
// Select all elements with the attribute data-close-button
const closeModalButtons = document.querySelectorAll('[data-close-button]');
// Select the element with the id 'overlay'
const overlay = document.getElementById('overlay');

// Add click event listeners to open modals
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the modal using the data-modal-target attribute
        const modal = document.querySelector(button.dataset.modalTarget);
        // Open the modal
        openModal(modal);
    });
});

// Add click event listeners to close modals
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the closest modal ancestor of the clicked button
        const modal = button.closest('.modal');
        // Close the modal
        closeModal(modal);
    });
});

// Function to open a modal
function openModal(modal) {
    // Check if the modal exists
    if (modal == null) return;
    // Add 'active' class to the modal and overlay
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Function to close a modal
function closeModal(modal) {
    // Check if the modal exists
    if (modal == null) return;
    // Remove 'active' class from the modal and overlay
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Add click event listener to the overlay to close modals
overlay.addEventListener('click', () => {
    // Select all modals with 'modal' and 'active' classes
    const modals = document.querySelectorAll('.modal.active');
    // Close each modal
    modals.forEach(modal => {
        closeModal(modal);
    });
});

// Timer (need to add more comments)
function updateTimer() {
    future = Date.parse("dec 31, 2023 23:59:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span><br>Days</span></div>' +
        '<div>' + h + '<span><br>Hours</span></div>' +
        '<div>' + m + '<span><br>Minutes</span></div>' +
        '<div>' + s + '<span><br>Seconds</span></div>';
}
setInterval('updateTimer()', 1000);



// forms hide and seek

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle changes in the "Dev" select box
    document.getElementById('dev').addEventListener('change', function() {
        var devSelect = document.getElementById('dev');
        var yearsInput = document.getElementById('years');

        if (devSelect.value === 'no') {
            yearsInput.style.display = 'none';
        } else {
            yearsInput.style.display = 'block';
        }
    });

    // Function to handle changes in the "Gender" select box
    document.getElementById('gender').addEventListener('change', function() {
        var genderSelect = document.getElementById('gender');
        var termsSelect = document.getElementById('terms');
        var termsNbSelect = document.getElementById('terms-nb');

        if (genderSelect.value === 'Non-binary') {
            termsSelect.style.display = 'none';
            termsNbSelect.style.display = 'block';
        } else {
            termsSelect.style.display = 'block';
            termsNbSelect.style.display = 'none';
        }
    });
});