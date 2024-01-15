// Function to add 'active' class to navbar links based on scroll position
function onScrollEvent() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    
    document.querySelectorAll('.navbar .links').forEach(link => {
        const refElement = document.querySelector(link.getAttribute('href'));
        if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Attach the function to the window scroll event
window.addEventListener('scroll', onScrollEvent);
