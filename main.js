// // registration start



// var Regform = document.getElementById(regform);

// Regform.addEventListener(sub , function(event){
   
//         let name = document.getElementById('username').value;
    
//     let studentId = document.getElementById('username').value;
    
    
//     let Email = document.getElementById('username').value;
    
//     let dept = document.getElementById('username').value;
//     console.log(Department);
    
//     let pass = document.getElementById('username').value;
   

//     console.log(name);
//     console.log(studentID);
//     console.log(Email);
//     console.log(dept);
//     console.log(pass);


// })

const express = require('express');
exports.form = (req , res) =>{
    res.sendFile('apply.html' , {root: '.'});

}
exports.formprocess = (req , res) =>
{
    console.log(req,body);
}



// // registration end


// payment start

function alertbox() {
    alert("Transection Successfull");
    window.location = './user.html';
  }
// payment End
// registration start
// registration end


  document.getElementById("myButton").onclick = function () {
   window.location = 'login.html';
};