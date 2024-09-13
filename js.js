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
function valid(){
    var nameRE = /^[A-Za-z]+(\s)+[A-Za-z]+$/;
    var emailRE = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
    var mobRE = /^(\d){10,11}$/;
        
    var Name=document.getElementById("name").value;
    if(Name==""){
        
        alert("Name cannot be blank");
        return false;
    }
    if(!nameRE.test(Name)){
        alert("Name has to be a combination of first name and last name");
        return false;
    }
    
    var Email=document.getElementById("email").value;
    if(Email==""){
        alert("Email cannot be blank");
        return false;
    }
    if(!emailRE.test(Email)){
        alert("Email should have proper validation");
        return false;
    }
    
    var Phone =document.getElementById("phone").value;
    if(Phone==""){
        alert("Phone no. cannot be blank");
        return false;
    }
    if(!mobRE.test(Phone)){
        alert("Please enter 10 digit phone no");
        return false;
    }
    
    var Message=document.getElementById("message").value;
    if(Message==""){
        alert("Message cannot be blank");
        return false;
    }
    }

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

// scrool section active link
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nev a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scrall reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// type js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let aboutBtn = document.getElementById('sklbtn');
aboutBtn.onclick = () => {
    aboutBtn.classList.toggle("rajnish kumar")
}
