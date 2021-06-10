function lasagna () {
  document.getElementById ("image").src ="Images/lasagna.jpg";
}
function lasagna2 () {
  document.getElementById ("image").src ="Images/lasagna2.jpg";
}

function newImage () {
    var image = document.getElementById ("myImage")
    if (image.src.match ("fries2")) {
      image.src = "Images/fries.jpg";
    } else {
      image.src = "Images/fries2.jpg";
    }
  }

  function alerta()
    {
    var mensaje;
    var opcion = confirm("Do you like it yes or no?");
    if (opcion == true) {
        mensaje = "You have said you like it";
	} else {
	    mensaje = "You have said you dont like it";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}
