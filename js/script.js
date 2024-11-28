// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // Add interactivity for links (smooth scroll)
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent the default action
            const sectionId = link.getAttribute("href").substring(1); // Get the section id from the href
            const targetSection = document.getElementById(sectionId);

            // Smooth scroll to the section
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add interactivity for "Read More" buttons in collection items
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const description = this.closest('.description');
            const shortText = description.querySelector('.short-text');
            const fullText = description.querySelector('.full-text');

            // Toggle the visibility of the full text
            if (fullText.style.display === 'none') {
                fullText.style.display = 'block';
                shortText.style.display = 'none'; // Hide the short text
                this.textContent = 'Read Less'; // Change button text to "Read Less"
            } else {
                fullText.style.display = 'none';
                shortText.style.display = 'block'; // Show the short text again
                this.textContent = 'Read More'; // Reset button text to "Read More"
            }
        });
    });

    const descriptions = [
        {
            short: "This is the first Jingdezhen porcelain piece, crafted using ancient methods.",
            full: "This is the first Jingdezhen porcelain piece, created using traditional methods that have been passed down for centuries. The intricate details reflect the mastery of the artisans who produced this piece."
        },
        {
            short: "Inspired by nature, this piece captures the elegance of porcelain artistry.",
            full: "This piece combines traditional artistry with modern techniques to capture the delicate balance found in nature. Its design is inspired by the natural beauty of the surroundings."
        },
        {
            short: "An elegant and modern interpretation of traditional design.",
            full: "This porcelain piece features a blend of modern interpretation with classical aesthetics. It brings together innovation and tradition to create a unique piece of art."
        }
    ];

    document.querySelectorAll('.photo img').forEach(img => {
        img.addEventListener('click', () => {
            const index = parseInt(img.dataset.index);
            const descriptionBox = document.querySelector('.description-box');
            
            descriptionBox.querySelector('.short-text').innerHTML = 
                descriptions[index].short + ' <span class="dots">...</span>';
            descriptionBox.querySelector('.full-text').textContent = 
                descriptions[index].full;
        });
    });

    // Read More button functionality
    document.querySelector('.read-more').addEventListener('click', function() {
        const fullText = document.querySelector('.full-text');
        const dots = document.querySelector('.dots');
        
        if (fullText.style.display === "none") {
            fullText.style.display = "block";
            dots.style.display = "none";
            this.textContent = "Read Less";
        } else {
            fullText.style.display = "none";
            dots.style.display = "inline";
            this.textContent = "Read More";
        }
    });
});
