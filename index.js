document.querySelector("form").addEventListener("submit", getdata);
let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];

displayTable(todoArr);

// const key = localStorage.getItem("todo");
// console.log(key);

// if (key == null) {
//   todoArr = [];
// } else {
//   todoArr = JSON.parse(localStorage.getItem("todo"));
// }

// console.log(todoArr);

function getdata(e) {
  e.preventDefault();
  // console.log("hii")

  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;

  //   console.log(taskName,taskPriority)

  //   let taskObj = {taskName:taskName,taskPriority:taskPriority}
  let taskObj = { taskName, taskPriority }; //ES6 notation
  todoArr.push(taskObj);

  localStorage.setItem("todo", JSON.stringify(todoArr));
  console.log(todoArr);
  displayTable(todoArr);
}

function displayTable(todo) {
  document.querySelector("tbody").innerText = "";
  todo.forEach((el) => {
    // console.log(el)
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.taskName;

    let td2 = document.createElement("td");
    td2.innerText = el.taskPriority;
 td2.id="priority"
    if (el.taskPriority == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }

    let td3 = document.createElement("button");
    td3.id="favourite"
    td3.innerText = "Add to favourite";

    td3.addEventListener("click", function () {
      // console.log("hii")
      // console.log(el)
      favArr.push(el);
      localStorage.setItem("fav", JSON.stringify(favArr));
    });

    row.append(td1, td2, td3);

    document.querySelector("tbody").append(row);
  });
}

