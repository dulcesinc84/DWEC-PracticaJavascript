var valoracionPeso =[["Infrapeso, delagedez severa"," < 16.00"],["Infrapeso, delgadez moderada","16.00 - 16.99"],["Infrapeso, delgadez aceptable",
    " 17.00 - 18:49"], ["Peso Normal","18.50 - 24.99 "],["Sobrepeso","25.00 - 29:99"],["Obeso, Tipo I"," 30.00 - 34.99"],
    ["Obeso, Tipo II"," 35.00 - 40.00"],["Obeso, Tipo III"," > 40.00"]];

function borra() {
    document.getElementById('peso').value="";
    document.getElementById("altura").value="";
}

function calcularImc(){
    var peso,alturaCm, alturaM="";
    peso = document.getElementById('peso').value;
    alturaCm = document.getElementById("altura").value;
    if (peso == '' || alturaCm == ''||peso<0 ||peso>400||alturaCm<0 ||alturaCm>230 ) {
        alert("Datos ingresados incorrectos");
        location.reload();}
    else {
        alturaM=alturaCm/100;
        determinaImc(peso, alturaM);
    }
}

/*formula*/
function determinaImc (peso, altura) {
    var  imc = peso / (altura * altura);

    document.getElementById("icmR").innerHTML=imc.toFixed(2);
    var valoracionT="";
    if (imc < 16) {
        valoracionT=valoracionPeso[0,0];
    } else if (imc >= 16.00 && imc <= 16.99) {
        valoracionT=valoracionPeso[0,1];
    } else if (imc >= 17.00 && imc <= 18.49) {
        valoracionT=valoracionPeso[0,2];
    } else if (imc >= 18.50 && imc < 24.99) {
        valoracionT=valoracionPeso[0,3];
    } else if (imc >= 25.00 && imc < 29.99) {
        valoracionT=valoracionPeso[0,4];
    } else if (imc >= 30.00 && imc < 34.99) {
        valoracionT=valoracionPeso[0,5];
    } else if (imc >= 35.00 && imc < 40.00) {
        valoracionT=valoracionPeso[0,6];
    } else if (imc > 40.00) {
        valoracionT=valoracionPeso[0,7];
    }
    var listaValoracion="";
    for (var i=0; i<valoracionPeso.length;i++){
        if (valoracionT==valoracionPeso[0,i]){
            listaValoracion=listaValoracion+"<li><strong>"+valoracionPeso[0,i]+"</strong></li>";i++;
        }
        listaValoracion="<ul>"+listaValoracion+"<li>"+valoracionPeso[0,i]+"</li>"+"</ul>";
    }
    document.getElementById("listaP").innerHTML="<b>Valoraciones:</b><br>"+listaValoracion;
    //document.getElementById("listaP").innerHTML=valoracion;
}
