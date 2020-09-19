// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function changeContent(page) {
  $("#main").load("blogs/" + page + ".html");
  // $("#main").load("http://localhost:1997/" + page + ".html");
}
$(document).ready(function() {
  $('#footer').scrollTop($('#footer')[0].scrollHeight);
  $( "#footer" ).click(function() {
    alert( "Handler for .click() called." );
  });
});

xxxx1

x2
x3