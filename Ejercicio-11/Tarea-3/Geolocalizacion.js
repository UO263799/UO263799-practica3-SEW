"use strict";
class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this), this.verErrores.bind(this));
    }
    getPosition(position){
        this.mensaje = "La petición de geolocalización se ha realizado con éxito.";
        this.longitud = position.coords.longitude; 
        this.latitud = position.coords.latitude;  
        this.precision = position.coords.accuracy;
		
		//Si descomento lo siguiente no me funciona (puede ser mi ordenador)
		
        /*this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;*/
    }

    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }

    show(){
        var coordenadas = document.querySelector('.coordenadas');
        coordenadas.innerHTML = '';

        //Mostrar coordenadas
        let liLongitud = document.createElement('li');
        liLongitud.append("Longitud: " + this.longitud + " grados");
        coordenadas.appendChild(liLongitud);
        let liLatitud = document.createElement('li');
        liLatitud.append("Latitud: " + this.latitud + " grados");
        coordenadas.appendChild(liLatitud);
        let liPrecision = document.createElement('li');
        liPrecision.append("Precisión de latitud y longitud: " + this.precision + " metros");
        coordenadas.appendChild(liPrecision);
		
		
    }

    getMapaEstaticoGoogle(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";

        var centro = "center=" + this.latitud + "," + this.longitud;

        var zoom ="&zoom=15";
        
        var size = "&size=800x600";

        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;

        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + size + marcador + sensor + apiKey;
        
        ubicacion.innerHTML = "<h2>Mapa de su localización</h2><img src='"+ this.imagenMapa +"' alt='Mapa'></img>";
    }
}
var posicion = new GeoLocalizacion();