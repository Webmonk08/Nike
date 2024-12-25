
const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 130);
});
let menu=document.querySelector('#menu-icon');
let menulist=document.querySelector('.menulist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
}


const coursesBtn = document.getElementById('coursesBtn');
const educationBtn = document.getElementById('educationBtn');
const coursesSection = document.getElementById('coursesSection');
const educationSection = document.getElementById('educationSection');

function showSection(section) {
    coursesSection.classList.add('hidden');
    educationSection.classList.add('hidden');
    section.classList.remove('hidden');
}

coursesBtn.addEventListener('click', function() {
    coursesBtn.classList.add('active');
    showSection(coursesSection);
    educationBtn.classList.remove('active');
});

educationBtn.addEventListener('click', function() {
    showSection(educationSection);
    educationBtn.classList.add('active');
    coursesBtn.classList.remove('active');
});

// Show courses section by default
showSection(coursesSection);
coursesBtn.classList.add('active');

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Form submitted successfully!');
});

