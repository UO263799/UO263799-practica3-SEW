class Electricity{
    constructor(){
    }



    

    cargarDatos(nombreComunidad, codigoComunidad){
        var url = "https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2020-01-01T00:00&end_date=2020-12-31T23:59&time_trunc=year&geo_trunc=electric_system&geo_limit=ccaa&geo_ids="
        +codigoComunidad;
        
        $.ajax({
            dataType: "json",
            url: url,
            method: 'GET',
            success: function(datos){
                $('.json').empty();               
                $('.json').append("<br>Comunidad: " + nombreComunidad + "<br>");
                $('.json').append(JSON.stringify(datos, null, 2));                 
               
            }
        });
    }

    verJSON(nombreComunidad, codigoComunidad){
        this.cargarDatos(nombreComunidad, codigoComunidad);
    }

}

				
var elec = new Electricity();






               