
var categoriasp= [["Benjamín","8-9"],["Alevín","10-11"],["Infantil","12-13"],["Cadete","14-15"],["Juvenil","16-17"],["Junior","18-19"]
    ,["Promesa","20-22"],["Sénior","23-35"],["Máster","Mayor a 35"]];

function definirCategoria() {

    var añoNacimiento="";
    añoNacimiento= document.getElementById("año").value;
    var añoActual = new Date();


    if (añoNacimiento == '' || añoNacimiento<0 ||añoNacimiento>añoActual.getFullYear()) {
        alert("No ha ingresado datos válidos");
        location.reload();
    }

    var añoCategoria =añoActual.getFullYear()-añoNacimiento;
    var categoriaAcertada="";

if(añoCategoria >= 8 && añoCategoria <=9) {
    categoriaAcertada=categoriasp[0,0];
} else if(añoCategoria >=10 && añoCategoria <=11) {
    categoriaAcertada=categoriasp[0,1];
} else if(añoCategoria >=12 && añoCategoria <=13) {
    categoriaAcertada=categoriasp[0,2];
} else if (añoCategoria >=14 &&añoCategoria <=15){
    categoriaAcertada=categoriasp[0,3];
} else if (añoCategoria >=16 &&añoCategoria <=17){
    categoriaAcertada=categoriasp[0,4];
} else if (añoCategoria >=18 &&añoCategoria <=19){
    categoriaAcertada=categoriasp[0,5];
} else if (añoCategoria >=20 &&añoCategoria <=22){
    categoriaAcertada=categoriasp[0,6];
} else if (añoCategoria >=23 &&añoCategoria <=35){
    categoriaAcertada=categoriasp[0,7];
}else if (añoCategoria>35){
    categoriaAcertada=categoriasp[0,8];
}
    var categorias="";
   for (var i=0;i<categoriasp.length;i++){
       if(categoriaAcertada==categoriasp[0,i]){
           categorias=categorias+"<li><strong>"+categoriasp[0,i]+"</strong></li>";i++;
       }
       categorias= "<ul>"+categorias+"<li>"+categoriasp[0,i]+"</li>"+"</ul>";
   }
    document.getElementById("lista").innerHTML="<b>Lista de todas las Categorías:</b><br>"+categorias;
}



