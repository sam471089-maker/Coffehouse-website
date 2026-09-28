const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>'; 
    });
});

const navbar = document.querySelector(".navbar"); 

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if(input.value.trim() === ""){
            valid = false;
            input.style.border = "2px solid red";
        }else{
            input.style.border = "none";
        }

    });

    if(valid){

        alert("✅ Thank you! Your message has been sent.");

        form.reset();

    }else{

        alert("❌ Please fill in all fields.");

    }

});

const hiddenElements = document.querySelectorAll(
".about, .card, .gallery-grid img, .review, .contact, footer"
);

hiddenElements.forEach(el=>{
    el.classList.add("hidden");
});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});