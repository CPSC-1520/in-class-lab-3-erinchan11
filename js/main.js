// 10/01/24 //
// In-Class Lab 3 - Erin Chan //

//Variables//
let resourceList = document.querySelector('.javascript-resources')
let showButton = document.getElementById('show-resources')

//Exercise 1//
showButton.addEventListener("click", removeDNone);
function removeDNone()
{
    resourceList.classList.remove('d-none');
}

//Exercise 2//
resourceList.addEventListener("mouseover", (eventBold)=>
{
    eventBold.target.classList.add("fw-bold")
})

//Exercise 3//
resourceList.addEventListener("mouseout", (eventUnBold)=> 
{
    eventUnBold.target.classList.remove("fw-bold")
})

//Exercise 4//
resourceList.addEventListener("click", (eventItalics)=>
{
    eventItalics.target.classList.add("fst-italic")
})