var personInput = document.getElementById("input-task");
var personHolder = document.getElementById("task-holder");
var personAddButton = document.getElementById("add-btn");
var personDeleteButton = document.getElementById("delete-btn");

// To bring cursor focus into input
personInput.focus();

var addPerson = function(){
	if(personInput.value !== ""){
		var addpersonList = createpersonList(personInput.value);
		personHolder.appendChild(addpersonList);
		bindDeleteEvents(addpersonList); //bind each list item seperately
	}else{
		alert("Please enter a task");
	}
	personInput.value = "";
}

var createpersonList = function(personName){
	console.log("Create Person List");
	var personList = document.createElement("li");
	var label = document.createElement("label");
	var deleteButton = document.createElement("button");

	deleteButton.className = "delete-btn pull-right";
	deleteButton.innerText = "x";

	label.innerText = personName;

	personList.appendChild(label);
	personList.appendChild(deleteButton);

	return personList;
}

var bindDeleteEvents = function(personListItem){
	console.log("Delete Event listener Added");
	var deleteButton = personListItem.querySelector("button.delete-btn"); //select button with class
	deleteButton.onclick = deletePerson;
}

var deletePerson = function(){
  var r = confirm("Are you sure you want to delete this item ?");
  if (r === true) {
    console.log("Deleting....");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
  }
}

personAddButton.addEventListener("click",addPerson);

personInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
 		addPerson();
    }
});
