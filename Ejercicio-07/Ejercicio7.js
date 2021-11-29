"use strict";
class Ejercicio7 {
    show(elem){
        $(elem).show();
    }
    hide(elem){
        $(elem).hide();
    }
    modificar(elem){
        var frases = ["Todo es posible en la vida si eres Brad Pitt", "Los amigos de verdad son difíciles de encontrar", "Me he puesto una sonrisa que combina con todo", "Asco de frases, ojalá te haya tocado esta :)"];
        var random = Math.floor(Math.random() * frases.length);
        $(elem).text(frases[random]);
    }
    masElementos(elem){
        var elementos = ["Elemento1", "Elemento2", "Elemento3", "Elemento4",  "Elemento5", "Elemento6", "Elemento7", "Elemento8"];
        var random = Math.floor(Math.random() * elementos.length);
        $(elem).append(elementos[random] + " ");
    }
    masMamiferos(elem){
        var mamiferos = ["Ornitorrinco", "León", "Humano", "Perro"];
        var random = Math.floor(Math.random() * mamiferos.length);
        $(elem).append(mamiferos[random] + " ");
    }
    masReptiles(elem){
        var reptiles = ["Cocodrilo", "Iguana", "Camaleón", "Serpiente"];
        var random = Math.floor(Math.random() * reptiles.length);
        $(elem).append(reptiles[random] + " ");
    }
    masAves(elem){
        var aves = ["Gorrión", "Águila", "Paloma", "Gaviota"];
        var random = Math.floor(Math.random() * aves.length);
        $(elem).append(aves[random] + " ");
    }
    eliminar(elem){
        $(elem).remove();
    }
    recorrer(element){
        $("*", document.body).each(function() {
            var parentTag = $(this).parent().get(0).tagName;
            $(element).prepend(document.createTextNode( "[Etiqueta padre: <"  + parentTag + "> Tipo de elemento: <" + $(this).get(0).tagName +"> ]"));
        });
    }
    sumarFilasYColumnas(elem){
        var nFilas = $("#tabla-personas tr").length;
        var nColumnas = $("#tabla-personas tr:last td").length;
        var res = nFilas + nColumnas
        $(elem).text(nFilas + " filas + " + nColumnas + " columnas = " + res);
    }

}
var ejercicio = new Ejercicio7();