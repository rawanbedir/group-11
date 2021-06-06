var getUserName=prompt("Hello, who are you?");

console.log(getUserName);

document.getElementById("UserName").innerText = getUserName;


//tooltip example
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })