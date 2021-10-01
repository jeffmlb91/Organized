$(document).ready(function () {
  $("#add").click(function () {
    var toAdd = $("#enter").val();
    if (toAdd !== "") {
      $("ul").append("<li>" + $("#enter").val() + "</li>");
      $("#enter").val("");
    }
  });

  $(document).on('click', 'li', function() {
    $(this).toggleClass('cross');
  })
  
  $(document).on('dblclick', 'li', function(){
    $(this).remove();
  })
}


);

/*var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);
var removeButton = document.getElementById("remove");

var input = document.getElementById("enter");
var todoList = document.querySelector("ul");

function addItem() {
  if (input.value !== "") {
    //create an li element
    var li = document.createElement("li");
    //put the input as the text of the element
    li.innerHTML = input.value;
    //add li element to the list
    todoList.appendChild(li);
    // put a strike through the li list to mark them as completed
    li.addEventListener("click", function () {
      li.classList.toggle("cross");
    });

    li.addEventListener("dblclick", function () {
      this.remove();
    });
  }

  input.value = "";
}*/
