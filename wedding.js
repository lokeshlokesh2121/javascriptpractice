
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => section.classList.remove('active'));
  
    
    // Show the clicked section
    
    document.getElementById(sectionId).classList.add('active');
    
}
  

$(document).ready(function() {

    $('#motherTongue').select2();

    $('#religion').select2();

    $('#community').select2();

    $('#state').select2();

});
