//create a function to add a task
const button = document.getElementById("btn");
const taskInput=document.getElementById("taskInput");
const inputMsg=document.getElementById("inputMsg");

function addListItem() {
	const isValid = validateForm();
	if(isValid){
		const inputValue=taskInput.value.trim();
		const newListItem = document.createElement("li");
		const newBox = document.createElement("div");
		newBox.textContent = inputValue;
		document.getElementById("taskList").appendChild(newListItem).appendChild(newBox);
		newBox.setAttribute("class","taskBox");
		const newButton=document.createElement("button");
		newButton.textContent="Remove";
	
	
		// newButton.style.cssFloat="right";
		
		newListItem.appendChild(newButton);
		inputMsg.style.visibility="visible";
		inputMsg.textContent='Task was submitted successfully!';
		taskInput.value="";		
	}
}


function validateForm(){
	const taskValue=taskInput.value.trim();
	let isValid=true;

	if (taskValue==="") {
		inputMsg.style.visibility="visible";
		inputMsg.textContent="A task is required.";
		isValid=false;		
	} else {
		inputMsg.style.visibility = "hidden";		
	}
	return isValid;
}

button.addEventListener("click", addListItem);

function keyCode(event){
	const x=event.keyCode;
	if(x==13){
		addListItem();
	}
}


//remove task
taskList.onclick = function(evt){
	if(evt.target.nodeName==="BUTTON"){
		evt.target.parentNode.remove();
	}
}

window.addEventListener("click",function(){
	// inputMsg.textContent="";
	inputMsg.style.visibility = "hidden"
},true);