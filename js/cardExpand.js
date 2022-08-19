const workItems = document.getElementsByClassName("work-item");

const workItemTitles = document.querySelectorAll(".work-item-title");

console.log(workItemTitles);

// workItems.forEach(addEventListener("click", expandCard));

workItemTitles.forEach(title =>{
    title.addEventListener('click', function expandCard(event){
        console.log("Clicked!");
        console.log(event.target);
    });
})

// function expandCard(e) {
    
//     console.log("Clicked!");
//     console.log(e.target);
//     // find work-item element with same index number

//     // if class name is "col-lg-4"
//         // change to col-lg-12
//         // change child element(s) to visible
//     // else if class name is "col-lg-12"
//         // change to col-lg-4
//         // change child element(s) to not visible

    
// }