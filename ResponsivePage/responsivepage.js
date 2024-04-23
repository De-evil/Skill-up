// JavaScript to handle pagination
const pages = document.querySelectorAll('.page');
const paginationLinks = document.querySelectorAll('.pagination a');

// paginationLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const pageId = this.getAttribute('data-page');
        
        // Hide all pages
        pages.forEach(page => {
            page.style.display = 'none';
        });

        // Show the selected page
        document.querySelector(`#page-${pageId}`).style.display = 'block';
    });
});

// Initially, show the first page
document.querySelector(`#page-1`).style.display = 'block';
