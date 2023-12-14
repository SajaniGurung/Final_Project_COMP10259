$(document).ready(function(){
  $(".container").css({"position": "fixed","background-color":"#000000","z-index":"1"});
})

  // Open the Modal
  function openModal(x) {
    switch(x){
    case 1:
      document.getElementById("modal").src="img/nemo4.jpg"; 
      break;
    case 2:
      document.getElementById("modal").src="img/nemo5.webp"; 
      break;
    case 3:
      document.getElementById("modal").src="img/nemo6.jpg"; 
      break;
    case 4:
      document.getElementById("modal").src="img/nemo7.png"; 
      break;
    }
    document.getElementById("modaldivision").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    document.getElementById("modaldivision").style.display = "none";
    document.getElementById("modal".src="null");
  }