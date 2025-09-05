// const items = document.querySelectorAll(".collection-item");
// items.forEach(function(e,index){
//     e.style.color="yellow";
// })
// let val;
// const list = document.querySelector(".collection");
// const lists = document.querySelector(".collection-item:nth-child(4)");
// // console.log(list);
// // console.log(lists);
// // val =list.children[0].children[1];
// // val =list.firstElementChild;
// // val = list.lastElementChild;
// // val = list.childElementCount;
// // val =list.parentElement.parentElement;
// // val = lists.nextElementSibling.nextElementSibling;
// val =lists.previousElementSibling;
// console.log(val);
//  const li= document.createElement("li");
//  li.className = "collection-item";
//  li.id="item-6";
//  li.innerText="List item 6";
//  const link = document.createElement("a");
//  link.className="delete-item secondary-content";
// link.innerHTML=`<i class="fa fa-remove"></i>`;
// li.appendChild(link);
// document.querySelector("ul").appendChild(li);
//  console.log(li);
//  const firstLi = document.querySelectorAll(".collection-item");
//  for(let i=0;i<firstLi.length;i++)
//  {
//     firstLi[i].remove();
//  }
//  const links = firstLi.children[0];
//  console.log(links);
// const firstLi = document.querySelector("li:nth-child(1)");
// const link = firstLi.children[0];
// let val;
// val =link.className;
// val = link.classList;
// val.add("test");
// val.add("kwsjnfwn");
// val.remove("test");

// console.log(val);
// const clear = document.addEventListener("click",()=>{
//     const val=["add-color","add-color1","add-color2"];
//         document.body.classList.toggle("add-color2");
    
// })
// document.querySelector(".clear-tasks").addEventListener("click",onClick);
// let count=0;
// document.querySelector("#task-title").innerText=count;
// function onClick(){
//     count+=1;
//     if(count<=20)
//     {
//         document.querySelector("#task-title").innerText=count;
//     }
//     else
//     {
//         document.querySelector("#task-title").innerText="fulled";     }
// }
// document.querySelector(".decrease").addEventListener("click",dec);
// function dec(){
//     count=count-1;
//    if(count>=0)
//    {
//     document.querySelector("#task-title").innerText=count;
//    }
// }
// const btnClass = document.querySelector(".decrease ");

// btnClass.addEventListener("mouseleave",runEvent);
// btnClass.addEventListener("mouseenter",runEvent);
// let count =0;
// function runEvent(e){
//     count+=1;
// if(count>=5)
// {
//     if(e.type === "mouseenter")
//         {
//        document.body.classList.add("add-color2")
//     }
//     if(e.type === "mouseleave")
//     {
//         document.body.classList.remove("add-color2");
//     }
// }
// if(count<5)
//     {
//         if(e.type === "mouseenter")
//             {
//            document.body.classList.add("add-color")
//         }
//         if(e.type === "mouseleave")
//         {
//             document.body.classList.remove("add-color");
//         }
//     }

// }
// const taskInput = document.getElementById("task");

// // Copy
// // taskInput.addEventListener("copy", runEvent);


// taskInput.addEventListener("paste", runEvent);




// function runEvent(e){
//     console.log(`Event Type ${e.type}`);
//     console.log(e.target.value);
// }
const ul=document.querySelector(".collection");
ul.addEventListener("click",delItem);
function delItem(e){
if(e.target.parentElement.className==="delete-item secondary-content")
{
    e.target.parentElement.parentElement.remove();
}
}
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const ulList = document.querySelector(".collection");
const deleteBtn = document.querySelector(".clear-tasks");

// Load all events
loadEventListeners();

function loadEventListeners() {
  // Add Task
  form.addEventListener("submit", addTask);
  // Delete single task
  ulList.addEventListener("click", deleteTask);
  // Clear all tasks
  deleteBtn.addEventListener("click", clearTasks);
}

// Add Task
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please fill the field");
  } else {
    // Create li
    const li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = taskInput.value;

    // Create link (delete button)
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // Create edit button
    const editSpan = document.createElement("span");
    editSpan.className = "edit";
    editSpan.innerHTML = `<i class="fa fa-edit"></i>`;

    // Append edit and delete to li
    link.prepend(editSpan);
    li.appendChild(link);

    // Append li to ul
    ulList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }
}

// Delete Task
function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

// Clear All Tasks
function clearTasks() {
  ulList.innerHTML = "";
}


