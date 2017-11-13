function add(){
    //almacenando valor//
    var comments = document.getElementById("tweet").value; //rescato el valor con . value//
    document.getElementById("tweet").value = ""; //para limpiar el valor//
    limit();
    var boton = document.getElementById("btn");//rescato el boton en una variable
    var texto = document.createTextNode(comments);
    var parrafo = document.createElement("p");
    var newComments = document.createElement('div');//crear un div que contenga todo lo que viene//
    cont.classList.add("newdiv");
    parrafo.appendChild(texto);
    newComments.appendChild(parrafo);
    cont.appendChild(newComments);
}

function limit(){
    var tweet = document.getElementById("tweet").value;
    var contador = document.getElementById("inp");
    var boton = document.getElementById("btn")
    var contadorMax = 140;

        colors();

    contador.innerHTML = contadorMax - tweet.length;

    if(tweet.length > contadorMax){
        btn.disabled = true;
    }if(tweet.length < contadorMax){
        btn.disabled = false;
    }
}
function colors(){
    var caracteres = document.getElementById("tweet").value.length;
    var contador = document.getElementById("inp");
    var boton = document.getElementById("btn");
    var contadorMax = 140;
    contador.innerHTML = contadorMax - tweet.length;

    if(caracteres >=120 && caracteres <= 130 ) {
        contador.style.color="red";
    }else if (caracteres >=131){
        contador.style.color="blue";
    }else {
        (contador.style.color="black");
    }
}








    