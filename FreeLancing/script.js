const timeline_observer  = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
            entry.target.classList.toggle("show",entry.isIntersecting)
    })
},
{
    // threshold: 0.3,
    rootMargin:"-10%"
})

const elementso = document.querySelectorAll(".timeline>li")
elementso.forEach(elemento =>{
    timeline_observer.observe(elemento)
})


// Hamburger menu toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<div></div><div></div><div></div>';
document.querySelector('nav').appendChild(hamburger);

hamburger.addEventListener('click', () => {
    const navItems = document.getElementById('nav-items');
    navItems.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
