// Main JavaScript file for the website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded and scripts are running.');

    // Example: Smooth scroll for navigation links if you have hash links
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let targetId = this.getAttribute('href');
    //         // Ensure targetId is not just "#" to prevent errors with non-specific hash links
    //         if (targetId.length > 1 && document.querySelector(targetId)) {
    //            document.querySelector(targetId).scrollIntoView({
    //                behavior: 'smooth'
    //            });
    //         }
    //     });
    // });

    // You can add more interactive features here, for example:
    // - Mobile navigation toggle
    // - Animations on scroll
    // - Filtering for blog posts or highlights
    // - Light/dark mode toggle

}); 