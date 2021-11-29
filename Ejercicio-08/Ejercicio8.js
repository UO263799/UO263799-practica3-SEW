"use strict";
var meteo = new Object();
meteo.apikey = "909b21d1b80f8cfdabe0f7743686bdf5";
meteo.unidades = "&units=metric";
meteo.idioma = "&lang=es";
meteo.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    

meteo.cargarDatos = 
function(city){
    meteo.ciudad=city;
    meteo.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo.ciudad + meteo.unidades + meteo.idioma + "&APPID=" + meteo.apikey;
    $.ajax({
        dataType: "json",
        url: meteo.url,
        method: 'GET',
        success: function(data){            
            meteo.datos = data;           
        },
        error:function(){
            document.write(meteo.error);    
        }
    });
}



meteo.verJSON = function(){        
    $('.datos').append(" en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a>");
    $('.datos').empty();
    $('.datos').append("JSON");
    var str = JSON.stringify(meteo.datos, null, 2);
    $('.datos').append(str);
    $('#cargarJSON').attr("disabled", true);
}

meteo.verDatos = function(){
    $('.datos').empty();    
    $('.datos').append('<img src="http://openweathermap.org/img/w/'+meteo.datos.weather[0].icon+'.png" height="64px" width="64px">');
    $('.datos').append("<li>Ciudad: " + meteo.datos.name + "</li>");
    $('.datos').append("<li>País: " + meteo.datos.sys.country + "</li>");
    $('.datos').append("<li>Latitud: " + meteo.datos.coord.lat + " grados</li>");
    $('.datos').append("<li>Longitud: " + meteo.datos.coord.lon + " grados</li>");
    $('.datos').append("<li>Temperatura: " + meteo.datos.main.temp + " grados Celsius</li>");
    $('.datos').append("<li>Máx temperatura: " + meteo.datos.main.temp_max + " celsius</li>");
    $('.datos').append("<li>Min temperatura: " + meteo.datos.main.temp_min + " celsius</li>");
    $('.datos').append("<li>Presión: " + meteo.datos.main.pressure + " milímetros</li>");
    $('.datos').append("<li>Humedad: " + meteo.datos.main.humidity + "%</li>"); 
    $('.datos').append("<li>Amanece a las: " + new Date(meteo.datos.sys.sunrise *1000).toLocaleTimeString() + "</li>"); 
    $('.datos').append("<li>Oscurece a las: " + new Date(meteo.datos.sys.sunset *1000).toLocaleTimeString() + "</li>"); 
    $('.datos').append("<li>Velocidad y dirección del viento: " + meteo.datos.wind.speed + " metros/segundo " + meteo.datos.wind.direction  + "</li>");
    $('.datos').append("<li>Fecha de la medida: " + new Date(meteo.datos.dt *1000).toLocaleDateString() + " Hora de la medida: " + new Date(meteo.datos.dt *1000).toLocaleTimeString() + "</li>");
    $('.datos').append("<li>Descripción: " + meteo.datos.weather[0].description + "</li>");
    $('.datos').append("<li>Visibilidad: " + meteo.datos.visibility + " metros</li>");
    $('.datos').append("<li>Nubosidad: " + meteo.datos.clouds.all + " %</li>");
    
}
       
