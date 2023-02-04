





// =============
// Navbar Search
// =============

let searchButtons = document.getElementsByClassName("fa-search");

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
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop >400){
        document.getElementById("navbarScroll").style.top = "0";

    }
    else{
        document.getElementById("navbarScroll").style.top = "-20%";
        $(".mobileScroll").removeClass("active");
       $(".cartMiniScroll").removeClass("active");

    }
})

// ===================
// Mobile Menu Toggle
// ===================

$(document).on("click", ".mobileBars", (e)=>{
    if(e.target.classList.contains("scroll")){
        $(".mobileScroll").toggleClass("active");
    }
    else{
        $(".mobileTop").toggleClass("active");
    }
} )


//==================

//==================

$(document).on("click", ".fa-bag-shopping", (e)=>{
    console.log(console.log(e.target))

    if(e.target.classList.contains("scroll"))
    $(".cartMiniScroll").toggleClass("active");
    else{
        $(".cartMiniTop").toggleClass("active");

    }
})