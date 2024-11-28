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
            const section = this.closest('.read-more-section');
            const fullText = section.querySelector('.full-text');
            const dots = section.querySelector('.dots');
            
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
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.read-more-section');
            const fullText = section.querySelector('.full-text');
            const dots = section.querySelector('.dots');
            
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
});
