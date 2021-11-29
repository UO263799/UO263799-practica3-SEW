"use strict";
class Ejercicio7 {
    
    show(element){
        $(element).show();
    }
    hide(element){
        $(element).hide();
    }
    addName(element){
        $(element).empty();
        $(element).append('El nombre del creador es: ')
        var myDestiny = ['Jesús', 'Isra', 'Luis', 'Héctor', 'Javi'];         
        var rand = myDestiny[Math.floor(Math.random() * myDestiny.length)];
        $(element).append(rand);
      
    }
    
    addSurname(element){  
        $(element).empty();
        $(element).append('Los apellidos del creador son:  ')
        var myStory = ['González Méndez', 'Méndez Rodríguez', 'García Suárez', 'Fernández Fernández'];  
        var rand1 = myStory[Math.floor(Math.random() * myStory.length)];        
        $(element).append(rand1);
    }
    delete(element){
        $(element).remove();
    }
    
    path(element){
        $("*", document.body).each(function() {
         var parent = $("*", document.body).parent().get(0).tagName;
        
        $(element).append(document.createTextNode(" [Elemento: <" + $(this).get(0).tagName +"> Padre: <" +parent + "> ]  "))
        });
        
    }
    
    
     modifySize(){
        $("*",document.body).each((function(){
        $("*").css("font-size","100%"); 
        }));
    }
    
    modifySizeUp(){
        $("*",document.body).each((function(){
        $("*").css("font-size","115%");
        }));
    }
    
    modifySizeDown(){
        $("*",document.body).each((function(){
        $("*").css("font-size","90%");
        }));
    }

    showTable(){        
        $("table tr").each(function() {
            $(this).show();
        });        
    }

    hideTable(){
        $("table tr td").each(function() {
            var celda = $.trim($(this).text());
            if (celda.length == 0) {
                $(this).parent().hide();
            }
        });
    }

}
                           
var ejercicio7 = new Ejercicio7();