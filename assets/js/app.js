function add(){
	//almacenando valor//
	var comments = document.getElementById("comment").value; //rescato el valor con . value//
	//para limpiar el valor//
	document.getElementById("comment").value = "";
	var newComments = document.createElement('div');//crear un div que contenga todo lo que viene//
    var cont = document.getElementById('cont');//agrega un id al contenedor div que se creo arriba//
    var parrafo = document.createElement("p");
    cont.classList.add("newdiv");
    var texto = document.createTextNode(comments);
    parrafo.appendChild(texto);
    newComments.appendChild(parrafo);
    cont.appendChild(newComments); 
}

    