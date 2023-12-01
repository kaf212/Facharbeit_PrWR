
/*
const elements = Array.from(document.getElementsByClassName("fig-1-text"))

// Options for the IntersectionObserver
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this threshold based on your needs
};

// Callback function to handle intersection changes
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the "animated" class when the element comes into view
            elements.forEach(element => {
                element.classList.add('animated');
            })
            // Stop observing once the animation has played
            observer.unobserve(entry.target);
        }
    });
};

// Create an IntersectionObserver with the callback and options
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the target element
elements.forEach(element => {
    observer.observe(element);
})

 */