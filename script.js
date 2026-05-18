// script.js

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2200);

});

// =========================
// LOTTIE LOADER CHECK
// =========================

const lottieLoader =
document.querySelector("lottie-player");

if(lottieLoader){

    lottieLoader.addEventListener("error", () => {

        console.log("Lottie loader failed to load.");

    });

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".glass, .feature-card, .gallery-card, .course-card, .social-card, .stat-card, .value-card, .achievement-card"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("show-reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// HERO IMAGE SLIDESHOW
// =========================

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

const heroImage =
    document.querySelector(".hero-image img");

let currentHero = 0;

if(heroImage){

    setInterval(() => {

        heroImage.style.opacity = "0";

        setTimeout(() => {

            currentHero++;

            if(currentHero >= heroImages.length){

                currentHero = 0;

            }

            heroImage.src = heroImages[currentHero];

            heroImage.style.opacity = "1";

        }, 500);

    }, 4000);

}

// =========================
// FLOATING EFFECT
// =========================

const floatingCards =
document.querySelectorAll(".hover-card");

floatingCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 10;

        const rotateX =
        ((y / rect.height) - 0.5) * -10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            scale(1.02)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            scale(1)
        `;

    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.style.padding = "14px 24px";

        navbar.style.background =
        "rgba(255,255,255,0.82)";

        navbar.style.backdropFilter =
        "blur(20px)";

    }

    else{

        navbar.style.padding = "18px 28px";

        navbar.style.background =
        "rgba(255,255,255,0.65)";

    }

});

// =========================
// ACTIVE NAV LINK
// =========================

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        link.style.transform =
        "translateY(-4px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform =
        "translateY(0px)";

    });

});

// =========================
// PARALLAX CLOUDS
// =========================

const clouds =
document.querySelectorAll(".floating-cloud");

window.addEventListener("scroll", () => {

    let scrollY = window.scrollY;

    clouds.forEach((cloud, index) => {

        const speed =
        (index + 1) * 0.08;

        cloud.style.transform = `
            translateY(${scrollY * speed}px)
        `;

    });

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn"
);

buttons.forEach((button) => {

    button.addEventListener("click", function(e){

        let x =
        e.clientX - e.target.offsetLeft;

        let y =
        e.clientY - e.target.offsetTop;

        let ripple =
        document.createElement("span");

        ripple.classList.add("ripple");

        ripple.style.left = `${x}px`;

        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});

// =========================
// SMOOTH IMAGE FADE
// =========================

const allImages =
document.querySelectorAll("img");

allImages.forEach((img) => {

    if(img.complete){

        img.style.opacity = "1";

    }

    img.onload = () => {

        img.style.opacity = "1";

    };

});

// =========================
// TABLE ROW ANIMATION
// =========================

const tableRows =
document.querySelectorAll(".hover-row");

tableRows.forEach((row) => {

    row.addEventListener("mouseenter", () => {

        row.style.transform =
        "scale(1.01)";

        row.style.transition =
        "0.3s ease";

    });

    row.addEventListener("mouseleave", () => {

        row.style.transform =
        "scale(1)";

    });

});

// =========================
// SOCIAL ICON GLOW
// =========================

const socialIcons =
document.querySelectorAll(".social-icon");

socialIcons.forEach((icon) => {

    icon.addEventListener("mouseenter", () => {

        icon.style.boxShadow =
        "0 0 30px rgba(53,109,255,0.45)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.boxShadow = "none";

    });

});

// =========================
// SECTION FADE-IN
// =========================

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
"section"
).forEach((section) => {

    section.classList.add("fade-section");

    observer.observe(section);

});

// =========================
// MOBILE NAV FIX
// =========================

const nav =
document.querySelector("nav");

const navToggle =
document.createElement("div");

navToggle.innerHTML = "☰";

navToggle.classList.add("mobile-toggle");

document.querySelector(".navbar")
.appendChild(navToggle);

navToggle.addEventListener("click", () => {

    nav.classList.toggle("show-nav");

});

// =========================
// SAFE NAVBAR CHECK
// =========================

if(!navbar){

    console.log("Navbar not found.");

}

// =========================
// CONSOLE MESSAGE 😭
// =========================

console.log(
"%cKEM HIGH SCHOOL WEBSITE LOADED",
"color:#356dff;font-size:20px;font-weight:bold;"
);

console.log(
"%cDesigned with premium animations & glassmorphism",
"color:#555;font-size:13px;"
);