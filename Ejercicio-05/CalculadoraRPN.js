"use strict";
class CalculadoraRPN {
    
    constructor (){
        this.pantalla = "";
        this.valorEnMemoria = "";

        this.stack = new Array();
    }
    digitos(digito){
        this.pantalla += digito;
        document.getElementById("pantalla").value = this.pantalla;
    }
    punto(){
        this.pantalla += ".";
        document.getElementById("pantalla").value = this.pantalla;
    }
    repaintPantallaPila(){
        document.getElementById("pila").value = "";
        for (let index = 0; index < this.stack.length; index++) {
            document.getElementById("pila").value += this.stack[index] + "\t";
        }
    }
    suma(){
        if(this.stack.length >= 2){
            var number1 = this.stack.pop();
            var number2 = this.stack.pop();
            var res = number2 + number1;
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    resta(){
        if(this.stack.length >= 2){
            var number1 = this.stack.pop();
            var number2 = this.stack.pop();
            var res = number2 - number1;
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    multiplicacion(){
        if(this.stack.length >= 2){
            var number1 = this.stack.pop();
            var number2 = this.stack.pop();
            var res = number2 * number1;
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    division(){
        if(this.stack.length >= 2){
            var number1 = this.stack.pop();
            var number2 = this.stack.pop();
            var res = number2 / number1;
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    mrc(){
        this.pantalla = this.valorEnMemoria;    //la memoria sera el nuevo numero a computar
        document.getElementById("pantalla").value = this.pantalla;
    }
    mMenos(){
        var num = Number.parseInt(document.getElementById("pantalla").value);
        if(!isNaN(document.getElementById("pantalla").value)){  //si es un numero
            this.valorEnMemoria = eval(this.valorEnMemoria + "-" + document.getElementById("pantalla").value);   //restarselo a la memoria
        }
    }
    mMas(){
        var num = Number.parseInt(document.getElementById("pantalla").value);
        if(!isNaN(document.getElementById("pantalla").value)){  //si es un numero
            this.valorEnMemoria = eval(this.valorEnMemoria + "+" + document.getElementById("pantalla").value);   //sumarselo a la memoria
        }
    }
    borrar(){
        this.pantalla = "";
        this.valorEnMemoria = "";
        this.stack = [];
        this.repaintPantallaPila();
        document.getElementById("pantalla").value = this.pantalla;
    }
    borrarMemoria(){
        this.valorEnMemoria = "";
    }
    seno(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.sin(number);
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    coseno(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.cos(number);
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    tangente(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.tan(number);
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    arcoseno(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.asin(number);
            if(isNaN(res)){
                alert("Resultado imposible");
            }else{
                this.stack.push(res);
                this.repaintPantallaPila();
            }
        }
    }
    arcocoseno(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.acos(number);
            if(isNaN(res)){
                alert("Resultado imposible");
            }else{
                this.stack.push(res);
                this.repaintPantallaPila();
            }
        }
    }
    arcotangente(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.atan(number);
            if(isNaN(res)){
                alert("Resultado imposible");
            }else{
                this.stack.push(res);
                this.repaintPantallaPila();
            }
        }
    }
    swap(){
        if(this.stack.length >= 2){
            var number1 = this.stack.pop();
            var number2 = this.stack.pop();
            this.stack.push(number1);
            this.stack.push(number2);
            this.repaintPantallaPila();
        }
    }
    raizCuadrada(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.pow(number,1/2);
            this.stack.push(res);
            if(isNaN(res)){
                alert("Resultado imposible");
            }else{
                this.repaintPantallaPila();
            }
        }
    }
    elevadoA(){
        if(this.stack.length >= 2){
            var number1 = this.stack.pop();
            var number2 = this.stack.pop();
            var res = Math.pow(number2,number1);
            this.stack.push(res);
            this.repaintPantallaPila();
        }
    }
    delete(){   //elimina el ultimo numero de la pila
        if(this.stack.length>=1){
            this.stack.pop();
            this.repaintPantallaPila();
        }
    }
    fact() {
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = this.calcularFactorial(number);
            if(isNaN(res)){
                alert("Resultado imposible");
            }else{
                this.stack.push(res);
                this.repaintPantallaPila();
            }
        }
    }
    calcularFactorial(n){
        var total = 1; 
        for (let i=1; i<=n; i++) {
            total = total * i; 
        }
        return total.toString(); 
    }
    logaritmoNeperiano(){
        if(this.stack.length>=1){
            var number = this.stack.pop();
            var res = Math.log(number);
            if(isNaN(res)){
                alert("Resultado imposible");
            }else{
                this.stack.push(res);
                this.repaintPantallaPila();
            }
        }
    }
    push(){
        var str = document.getElementById("pantalla").value;
        if(isNaN(str) || str == "" || str.charAt(0) == "."){
            alert("Not a number");
            this.pantalla = "";
            document.getElementById("pantalla").value = this.pantalla;
        }else{
            this.stack.push(parseFloat(str));
            this.pantalla = "";
            document.getElementById("pantalla").value = this.pantalla;
            document.getElementById("pila").value += str + "\t";
        }
    }
}
var calculadora = new CalculadoraRPN();