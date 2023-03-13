//  add to cort quantity

$(".increment").on("click", ()=>{
    $(".add-count").val(parseInt($(".add-count").val())+1)
})


$(".decrement").on("click", ()=>{
    let count =parseInt($(".add-count").val())
    if(count >=1)
        $(".add-count").val(count -1)
})


let arr = [1,23,45,4]
arr.forEach(item=>{
    console.log(item)
})