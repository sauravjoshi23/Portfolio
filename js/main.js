console.log("In1")

var html_plus = document.getElementById("html_plus");
html_plus.onclick = function(){
	console.log("In")
    if(Number(html_skill.innerHTML.replace("%","")) < 100){
        element = document.getElementById("html_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current + 1;
        element.style.width = updated.toString() +  "%";
        console.log("plus"); 
        console.log(current);
        html_skill.innerHTML = (Number(html_skill.innerHTML.replace("%","")) + 1).toString() + "%";
    }
    
};

var react_plus = document.getElementById("react_plus");
react_plus.onclick = function(){
	console.log("In")
    if(Number(react_skill.innerHTML.replace("%","")) < 100){
        element = document.getElementById("react_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current + 1;
        element.style.width = updated.toString() +  "%";
        console.log("plus"); 
        console.log(current);
        react_skill.innerHTML = (Number(react_skill.innerHTML.replace("%","")) + 1).toString() + "%";
    }
    
};

var ml_plus = document.getElementById("ml_plus");
ml_plus.onclick = function(){
	console.log("In")
    if(Number(ml_skill.innerHTML.replace("%","")) < 100){
        element = document.getElementById("ml_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current + 1;
        element.style.width = updated.toString() +  "%";
        console.log("plus"); 
        console.log(current);
        ml_skill.innerHTML = (Number(ml_skill.innerHTML.replace("%","")) + 1).toString() + "%";
    }
    
};

var java_plus = document.getElementById("java_plus");
java_plus.onclick = function(){
	console.log("In")
    if(Number(java_skill.innerHTML.replace("%","")) < 100){
        element = document.getElementById("java_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current + 1;
        element.style.width = updated.toString() +  "%";
        console.log("plus"); 
        console.log(current);
        java_skill.innerHTML = (Number(java_skill.innerHTML.replace("%","")) + 1).toString() + "%";
    }
    
};

var html_minus = document.getElementById("html_minus");
html_minus.onclick = function(){
    if(Number(html_skill.innerHTML.replace("%","")) > 0){
        element = document.getElementById("html_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current - 1;
        element.style.width = updated.toString() +  "%";
        console.log("minus"); 
        console.log(current);
        html_skill.innerHTML = (Number(html_skill.innerHTML.replace("%","")) - 1).toString() + "%";
    }
    
};

var react_minus = document.getElementById("react_minus");
react_minus.onclick = function(){
	console.log("In")
    if(Number(react_skill.innerHTML.replace("%","")) > 0){
        element = document.getElementById("react_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current - 1;
        element.style.width = updated.toString() +  "%";
        console.log("minus"); 
        console.log(current);
        react_skill.innerHTML = (Number(react_skill.innerHTML.replace("%","")) - 1).toString() + "%";
    }
    
};

var ml_minus = document.getElementById("ml_minus");
ml_minus.onclick = function(){
	console.log("In")
    if(Number(ml_skill.innerHTML.replace("%","")) > 0){
        element = document.getElementById("ml_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current - 1;
        element.style.width = updated.toString() +  "%";
        console.log("minus"); 
        console.log(current);
        ml_skill.innerHTML = (Number(ml_skill.innerHTML.replace("%","")) - 1).toString() + "%";
    }
    
};

var java_minus = document.getElementById("java_minus");
java_minus.onclick = function(){
	console.log("In")
    if(Number(java_skill.innerHTML.replace("%","")) > 0){
        element = document.getElementById("java_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current - 1;
        element.style.width = updated.toString() +  "%";
        console.log("minus"); 
        console.log(current);
        java_skill.innerHTML = (Number(java_skill.innerHTML.replace("%","")) - 1).toString() + "%";
    }
    
};




function myFunction() {
  alert("Form has been submitted!!!!");
}


