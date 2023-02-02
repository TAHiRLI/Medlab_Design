





// =============
// Navbar Search
// =============

let searchButtons = document.getElementsByClassName("la-search");

for (const searchButton of searchButtons) {

   searchButton.addEventListener("click", (e)=>{
    var searchBox = e.target.parentElement;
    var input = e.target.previousElementSibling;
    if(!input.value?.length > 0)
    searchBox.classList.toggle("active")
})

}
 


// =============
// Navbar Scroll
// =============
window.addEventListener("scroll", ()=>{
    console.log( document.documentElement.scrollTop)
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop >400){
        document.getElementById("navbarScroll").style.top = "0";
    }
    else{
        document.getElementById("navbarScroll").style.top = "-20%";
    }
})