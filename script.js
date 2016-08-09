$(document).ready(function () {
  $(".sidebar-item").hide();
  $(".btn-sidebar").hide();
  $("#menu-orig").click(function () {
    $("#main").animate({left: "-200px"}, 500);
    $(".sidebar").offset({top: 8, left: 600});
    $(".sidebar").animate({width: "350px"}, 500);
    $("#menu-orig").hide();
    $(".sidebar-item").show();
    $(".btn-sidebar").show();
  }); //end of commands for original press of hamburger menu
  $(".btn-sidebar").click(function () {
    $(".sidebar-item").hide();
    $(".btn-sidebar").hide();
    $("#main").animate({left: "+=200px"}, 500);
    $(".sidebar").offset({top: 8, left: 820});
    $(".sidebar").animate({width: "50px"}, 500);
    $("#menu-orig").show();
  }); //end of commands to close the menu
}); //end of jQuery body

function result() {
  var q1;
  if (document.getElementById("1a").checked) {
    var q1 = 3;
  }
  else if (document.getElementById("1b").checked) {
    var q1 = 1;
  }
  else if (document.getElementById("1c").checked) {
    var q1 = 4;
  }
  else if (document.getElementById("1d").checked) {
    var q1 = 2;
  }
  else {
    alert("Please select one choice for each question.");
    return;
  }
  var q2;
  if (document.getElementById("2a").checked) {
    var q2 = 2;
  }
  else if (document.getElementById("2b").checked) {
    var q2 = 4;
  }
  else if (document.getElementById("2c").checked) {
    var q2 = 3;
  }
  else if (document.getElementById("2d").checked) {
    var q2 = 1;
  }
  else {
    alert("Please select one choice for each question.");
    return;
  }
  var q3;
  if (document.getElementById("3a").checked) {
    var q3 = 3;
  }
  else if (document.getElementById("3b").checked) {
    var q3 = 2;
  }
  else if (document.getElementById("3c").checked) {
    var q3 = 1;
  }
  else if (document.getElementById("3d").checked) {
    var q3 = 4;
  }
  else {
    alert("Please select one choice for each question.");
    return;
  }
  var q4;
  if (document.getElementById("4a").checked) {
    var q4 = 1;
  }
  else if (document.getElementById("4b").checked) {
    var q4 = 4;
  }
  else if (document.getElementById("4c").checked) {
    var q4 = 2;
  }
  else if (document.getElementById("4d").checked) {
    var q4 = 3;
  }
  else {
    alert("Please select one choice for each question.");
    return;
  }
  var q5;
  if (document.getElementById("5a").checked) {
    var q5 = 4;
  }
  else if (document.getElementById("5b").checked) {
    var q5 = 3;
  }
  else if (document.getElementById("5c").checked) {
    var q5 = 2;
  }
  else if (document.getElementById("5d").checked) {
    var q5 = 1;
  }
  else {
    alert("Please select one choice for each question.");
    return;
  }
  var total = q1 + q2 + q3 + q4 + q5;
  if (total < 10) {
    alert("A Cairn Terrier might not be the right fit for you. Take heart: there are plenty of other breeds. You may be happier with a more docile and less high-maintenance pet.");
  }
  else if (total >= 10 && total < 16) {
    alert("You are a moderate fit for a Cairn, but another breed might be a better fit.");
  }
  else {
    alert("You are an excellent fit for a Cairn. Personality and lifestyle match are very important between a dog and its owner, and you seem to match well with a Cairn Terrier.");
  }
}; // end of result function
