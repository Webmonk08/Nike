gsap.registerPlugin(ScrollTrigger);

console.log(window.innerWidth)

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 1) {slideIndex = slides.length}
    if (slideIndex > slides.length) {slideIndex = 1}
    showCurrentSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showCurrentSlide(slideIndex);
}

function showCurrentSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";
}


if (window.innerWidth >=  768)
{document.querySelectorAll(".section").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=80%",
      pin: true,
      pinSpacing: false,
      scrub:1,
    //   markers: true
    });
  });}
  


  document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
        (entries) => {
            // console.log(entries)
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-visible');
                } else {
                    entry.target.classList.remove('card-visible');
                }
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 50% visibility
        }
    );

    card.forEach((card) => {
        // console.log(1)
    observer.observe(card);
});
});





   // Get references to the elements
   const overlay = document.getElementById('alertOverlay');
   const closeAlertBtn = document.getElementById('closeAlert');
   const okAlertBtn = document.getElementById('okAlert');

   // Function to show the alert
   const showAlert = () => {
     overlay.style.display = 'flex'; // Show the overlay
     document.body.classList.add('no-scroll'); // Disable scrolling
   };

   // Function to hide the alert
   const hideAlert = () => {
     overlay.style.display = 'none'; // Hide the overlay
     document.body.classList.remove('no-scroll'); // Enable scrolling
   };

   // Show the alert automatically when the page loads
   document.querySelector("#btn").addEventListener('click', showAlert);

   // Event listeners for the close and OK buttons
   closeAlertBtn.addEventListener('click', hideAlert);
   okAlertBtn.addEventListener('click', hideAlert);
