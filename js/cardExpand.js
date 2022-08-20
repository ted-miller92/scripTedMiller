const workItems = document.querySelectorAll(".work-item");

const workItemTitles = document.querySelectorAll(".work-item-title");

console.log(workItemTitles);

// workItems.forEach(addEventListener("click", expandCard));
for (i = 0; i < workItemTitles.length; i++){
    const workItem = workItems[i];
    workItemTitles[i].addEventListener('click', function expandCard(event){
        console.log("Clicked!");
        console.log(event.target);
        
        if (workItem.classList.contains("col-lg-4")){
            workItem.classList.remove("col-lg-4");
            workItem.classList.add("col-lg-12");
        } else if (workItem.classList.contains("col-lg-12")){
            workItem.classList.remove("col-lg-12");
            workItem.classList.add("col-lg-4");
        }   
    });
    

    
}


// workItemTitles.forEach(title =>{
    
//     title.addEventListener('click', function expandCard(event){
//         console.log("Clicked!");
//         console.log(event.target);
        
//         // find work-item element with same index number

//         // if class name is "col-lg-4"
//             // change to col-lg-12
//             // change child element(s) to visible
//         // else if class name is "col-lg-12"
//             // change to col-lg-4
//             // change child element(s) to not visible

//     });
// });