
function horarioMatutino() {

    var tabla ="<table class=\"table table-hover\">\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <th colspan=\"6\" class=\"tituloTablas\">Horario Matutino</th>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> Hora </td>\n" +
        "        <td> Lunes </td>\n" +
        "        <td> Martes </td>\n" +
        "        <td> Miércoles </td>\n" +
        "        <td> Jueves </td>\n" +
        "        <td> Viernes </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> 9:00 - 11:00 </td>\n" +
        "        <td> Junior Martillo </td>\n" +
        "        <td> Benjamín Pértiga </td>\n" +
        "        <td> Alevín Longitud </td>\n" +
        "        <td> Infantil Altura </td>\n" +
        "        <td> Cadete Disco </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> 11:00 - 13:00 </td>\n" +
        "        <td> Alevín Disco </td>\n" +
        "        <td> Máster 4x100 m </td>\n" +
        "        <td> Junior 500 m marcha </td>\n" +
        "        <td> Promesa Altura </td>\n" +
        "        <td> Sénior 100 m </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> 13:00 - 15:00 </td>\n" +
        "        <td> Benjamín Calentamiento </td>\n" +
        "        <td> Alevín 4x100 m </td>\n" +
        "        <td> Infantil 100 m marcha </td>\n" +
        "        <td> Cadete 3.000 m </td>\n" +
        "        <td> Promesa 100 m </td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>\n";
    document.getElementById("horarioM").innerHTML=tabla;
}


function horarioVespertino() {

    var tabla2 ="<table class=\"table table-hover\">\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <th colspan=\"7\" class=\"tituloTablas\">Horario Vespertino</th>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> Hora </td>\n" +
        "        <td> Lunes </td>\n" +
        "        <td> Martes </td>\n" +
        "        <td> Miércoles </td>\n" +
        "        <td> Jueves </td>\n" +
        "        <td> Viernes </td>\n" +
        "        <td> Sábado </td>\n" +
        "        <td> Domingo </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> 16:00 - 17:00 </td>\n" +
        "        <td> Cadetes Martillo </td>\n" +
        "        <td> Benjamín Pértiga </td>\n" +
        "        <td> Infantil Longitud </td>\n" +
        "        <td> Juvenil Altura </td>\n" +
        "        <td> Sénior Disco </td>\n" +
        "        <td> Promesa 100 m </td>\n" +
        "        <td> Alevín Marcha </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> 17:00 - 18:00 </td>\n" +
        "        <td> Junior Disco </td>\n" +
        "        <td> Alevín 4x100 m </td>\n" +
        "        <td> Juvenil 500 m marcha </td>\n" +
        "        <td> Promesa Altura </td>\n" +
        "        <td> Cadetes 100 m </td>\n" +
        "        <td> Sénior Salto </td>\n" +
        "        <td> Alevín Disco </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td> 18:00 - 19:00 </td>\n" +
        "        <td> Máster marcha </td>\n" +
        "        <td> Alevín 4x100 m </td>\n" +
        "        <td> Junior 100 m marcha </td>\n" +
        "        <td> Sénior 3.000 m </td>\n" +
        "        <td> Benjamín 100 m </td>\n" +
        "        <td> Cadetes 4x100 m </td>\n" +
        "        <td> Infantil 50 m marcha </td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>";
    document.getElementById("horarioV").innerHTML=tabla2;
}