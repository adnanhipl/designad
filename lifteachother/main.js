 // Get the elements
 const sidebarCollapseButton = document.querySelector('.sidebarcollapse');
 const menuIcon = document.querySelector('.menu-icon');
 const sidebar = document.querySelector('.sidebarcollapse-wrapper');
 const sidebarmobile = document.querySelector('.sidebar');

 sidebarCollapseButton.addEventListener('click', function() {
     sidebar.classList.toggle('collapsedsidebar');
 });

 menuIcon.addEventListener('click', function() {
     sidebarmobile.classList.toggle('open'); 
 });
 

const previewbtn = document.getElementById("previewbtn");
const sidebarpreview = document.querySelector(".sidebar");
const sessionplannerbtn = document.getElementById("sessionlisting");
const sessionplanner = document.querySelector(".sidebar");

if (previewbtn && sidebarpreview) {
    previewbtn.addEventListener("click", function () {
        sidebarpreview.classList.toggle("previewopen");
    });
}

if (sessionplanner && sessionplannerbtn) {
    sessionplannerbtn.addEventListener("click", function () {
        sidebarpreview.classList.toggle("hidemenus");
    });
}

