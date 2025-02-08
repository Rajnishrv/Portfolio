//send data to email
function sentEmail() {
    Email.send({
        SecureToken: "e426ef0b-94f8-44f7-8010-8010184eef51",
        To: 'rajnishkumar550443@gmail.com',
        From: "rajnishkumar550443@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => swal("Success", "We will contact you soon.")
    );
};

// contact form validation
function valid() {
    var nameRE = /^[A-Za-z]+(\s)+[A-Za-z]+$/;
    var emailRE = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
    var mobRE = /^(\d){10,11}$/;

    var Name = document.getElementById("name").value;
    if (Name == "") {

        alert("Name cannot be blank");
        return false;
    }
    if (!nameRE.test(Name)) {
        alert("Name has to be a combination of first name and last name");
        return false;
    }

    var Email = document.getElementById("email").value;
    if (Email == "") {
        alert("Email cannot be blank");
        return false;
    }
    if (!emailRE.test(Email)) {
        alert("Email should have proper validation");
        return false;
    }

    var Phone = document.getElementById("phone").value;
    if (Phone == "") {
        alert("Phone no. cannot be blank");
        return false;
    }
    if (!mobRE.test(Phone)) {
        alert("Please enter 10 digit phone no");
        return false;
    }

    var Message = document.getElementById("message").value;
    if (Message == "") {
        alert("Message cannot be blank");
        return false;
    }
}

// Toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll section active link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            // Check if the element exists before accessing its classList
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) {
                activeLink.classList.add('active');
            } else {
                console.warn(`No link found for section with ID: ${id}`);
            }
        }
    });

    // Sticky navbar
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar link scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Scroll reveal
const scrollReveal = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

scrollReveal.reveal('.home-content, .heading', { origin: 'top' });
scrollReveal.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
scrollReveal.reveal('.home-content h1, .about-img', { origin: 'left' });
scrollReveal.reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
