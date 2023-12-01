document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");

    searchIcon.addEventListener("click", function(event) {
        event.preventDefault(); 
        if (searchInput.classList.contains("d-none")) {
            searchInput.classList.remove("d-none");
            searchInput.classList.add("d-block");
        } else {
            searchInput.classList.remove("d-block");
            searchInput.classList.add("d-none");
        }
    });
});