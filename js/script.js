// var mobile_header = document.getElementById('mobile_header');
// var desktop_header = document.getElementById('desktop_header');

// function myToggler() {
//     desktop_header.classList.toggle('hidden');
//     mobile_header.classList.toggle('hidden');
// }


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.querySelectorAll("#myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btns.forEach(btn => btn.addEventListener('click', function() {
    console.log('clicked');
    modal.style.display = "block";
}))

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// filter dropdown
const filterDropdown = document.querySelector('.filter-dropdown');
const filterButtun = document.querySelector('.filters-button');
const filterArrow = document.querySelector('.filter-arrow');
const searchOverlay = document.querySelector('.search-suggestion-overlay');
const filterBugdetBtn = document.querySelectorAll('.filter-bugdet-btn');


function hideOverlayAndFilter() {
    filterDropdown.classList.toggle('filter-dropdown-show');
    searchOverlay.style.display = "none";
}

function showOverlayAndFilter() {
    filterDropdown.classList.toggle('filter-dropdown-show');
    searchOverlay.style.display = "block";
}

// EVENT LISTENERS:
if (filterButtun) {
    filterButtun.addEventListener('click', showOverlayAndFilter);
}
if (filterArrow) {
    filterArrow.addEventListener('click', hideOverlayAndFilter);
}
if (searchOverlay) {
    searchOverlay.addEventListener('click', hideOverlayAndFilter);
}


/////product slider
$('.scroll-bar-carosel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    mouseDrag: true,
    responsive: {
        0: {
            items: 5
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
}