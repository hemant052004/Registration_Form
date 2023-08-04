

function Leftclick() {
     document.getElementById("em").style.background = "blue";
     document.getElementById("em").style.color = "white";
     document.getElementById("hire").style.background = "white";
     document.getElementById("hire").style.color = "blue";
     document.getElementById("heading").innerHTML = "Apply as a Hirer";
}
function Rightclick() {
     document.getElementById("em").style.background = "white";
     document.getElementById("em").style.color = "blue";
     document.getElementById("hire").style.background = "blue";
     document.getElementById("hire").style.color = "white";
     document.getElementById("heading").innerHTML = "Apply as a Employee";

}

function validateForm() {

    
     let name = document.getElementById("fname").value;

     let pass = document.getElementById("pass").value;
     let cpass = document.getElementById("cpass").value;

     let pno = document.getElementById("phone").value;


     if (name.length <= 2) {
          alert(" Entered name is too short !!");
          return false;
     }

     else if (name.length >=15) {
          alert("Entered name is too long !!");
          return false;
     }
      
      else if(pass.length<8||pass.length>10){
          alert("Please Enter valid password !!");
          return false;
     }
     
      else if(pass!=cpass){
          alert("Password and Confirm password not matched!!");
          return false;
     }

      else if (!validatePhoneNumber(pno)) {
          alert("Please enter valid Phonenumber !!");
          return false;
      } 
   


    

}

function validatePhoneNumber(input_str) {
     let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
 
     return re.test(input_str);
 }

 
