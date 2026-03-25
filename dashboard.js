const username = localStorage.getItem("username");

console.log("Got:", username);

if (username) {
  document.getElementById("welcome").innerText =
    `Welcome, ${username} 👋`;
} else {
  window.location.href = "index.html";
}



// ADD TASK
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");

  // ✅ checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.onchange = function () {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "black";
    }
  };

  // ✅ text
  let span = document.createElement("span");
  span.textContent = " " + taskText;

  // ✅ append
  li.appendChild(checkbox);
  li.appendChild(span);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
  checkbox.onchange = function () {
  if (checkbox.checked) {
    li.style.textDecoration = "line-through";
    li.style.color = "gray";
  } else {
    li.style.textDecoration = "none";
    li.style.color = "black";
  }

  updateChart(); // 🔥 important
};
}

// ENTER KEY SUPPORT
document.getElementById("taskInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // Graph code

  let chart;

  function updateChart(){
    let tasks = document.querySelectorAll("#taskList li");

    let completed = 0;
    let pending = 0;

    tasks.forEach(task => {
      let checkbox = task.querySelector("input");
      

      if( checkbox.checked){
        completed++;
      } else {
        pending++;
      }
    });
    drawChart( completed, pending );
  }

  function drawChart( completed, pending ){
    let canvas = document.getElementById("taskChart");

    if( !canvas ) return;

    let ctx = canvas.getContext("2d");

    if(chart){
      chart.destroy();
    }

    chart = new Chart( ctx, {
      type: "pie",
      data : {
        labels: ["completed", "pending"], 
        datasets: [{
          data: [completed , pending ],
          backgroundColor : ["green", "orange"]
        }]
      }
    });
  }