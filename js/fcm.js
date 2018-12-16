var valoracion=[["Zona de recuperación", "60 - 70"],["Zona areóbica", "70 - 80"],["Zona anaeróbica", "80 - 90"],
                 ["Línea Roja", "90 - 100"]];
function borraFCM() {
    document.getElementById('edad').value="";
    document.getElementById("frecuenciaB").value="";
}

function fcm(){
    var edad,frecuenciaB="";

    edad = document.getElementById("edad").value;
    frecuenciaB =document.getElementById("frecuenciaB").value;
    var resultado = 0;
    parseInt(edad);

    if (edad == '' || frecuenciaB == ''||edad<0 ||edad>120) {
        alert("No ha ingresado datos válidos");
        location.reload();
    }

    if( document.getElementById("m").checked){
        resultado = 220 - edad;
    }

    else {
        resultado = 226 - edad;
    }

    var porcent= frecuenciaB*100/resultado;
    var valoracionA="";
    document.getElementById("resultadoFcm").innerHTML="Frecuencia máxima cardiaca : "+resultado;

    if(porcent>=60&&porcent<=70){
        valoracionA=valoracion[0,0];
        document.getElementById("resultadoPorcentaje").innerHTML= "Zona de recuperación:"+porcent+"<br>";
    }else if(porcent>=70&&porcent<=80){
        valoracionA=valoracion[0,1];
        document.getElementById("resultadoPorcentaje").innerHTML= "Zona areóbica:"+porcent+"<br>";
    }  else if(porcent>=80&&porcent<=90) {
        valoracionA=valoracion[0,2];
        document.getElementById("resultadoPorcentaje").innerHTML = "Zona anaeróbica:" + porcent + "<br>";
    }  else if(porcent>=90&&porcent<=100) {
        valoracionA=valoracion[0,3];
        document.getElementById("resultadoPorcentaje").innerHTML = "Línea Roja:" + porcent + "<br>";
    }
    var listaT="";
    for (var i =0;i<valoracion.length;i++){
        if (valoracionA==valoracion[0,i]){
            listaT=listaT+"<li>"+"<strong>"+valoracion[0,i]+"</strong>"+"</li>";
        }
        listaT="<ul>"+listaT+"<li>"+valoracion[0,i]+"</li></ul>";
    }
    document.getElementById("listaF").innerHTML="<br><b>Valoraciones:</b><br>"+listaT;
}