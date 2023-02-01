let searchButton = document.getElementById("search-icon");

console.log(searchButton);

searchButton.addEventListener("click", (e)=>{
    var searchBox = e.target.parentElement;
    var input = e.target.previousElementSibling;
    if(!input.value?.length > 0)
    searchBox.classList.toggle("active")
})