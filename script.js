
// Function to set whether a link is active or not
function setActiveLink(event) {
    
    // Get all the nav links from the html document
    const navLinks = document.querySelectorAll('.nav-item.nav-link')

// Loop throught the nav links and remove "Active"
    navLinks.forEach((link) => {
        link.classList.remove('active')
    })

    // Add 'active' when clicked on
    event.target.classList.add('active')

    // Add event listener for each nav item
    document.querySelectorAll('.nav-item.nav-link:not(.disabled').forEach((link) => {
        link.addEventListener('click', setActiveLink)
    })

}
