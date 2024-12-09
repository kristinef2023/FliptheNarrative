document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 0; // Index of the current page
    const pages = document.querySelectorAll(".page");

    // Initially hide all pages except the first one
    pages.forEach((page, index) => {
        if (index !== 0) page.style.display = "none";
    });

    // Function to change pages
    window.changePage = function (direction) {
        // Hide the current page
        pages[currentPage].style.display = "none";

        // Update the page index with circular navigation
        currentPage = (currentPage + direction + pages.length) % pages.length;

        // Show the new page
        pages[currentPage].style.display = "block";
    };
});
