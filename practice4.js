const element=document.getElementById("demo");
document.getElementById("demo").innerHTML= element.innerHTML + " " + "Hello World!"
document.getElementById("demo").style.backgroundColor ="red";

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
    
