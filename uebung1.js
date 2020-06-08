"use strict";


class Calculator{
    constructor(firstoutput, secondoutput){
        this.firstoutput = firstoutput;
        this.secondoutput = secondoutput;
        
    }

    allclear(){
        this.firstoutput = "";
        this.secondoutput = "";
        
        document.getElementById("output-second").innerHTML = this.secondoutput;
        document.getElementById("output-first").innerHTML = this.firstoutput;

    }

    delete(){
        this.firstoutput = this.firstoutput.substring(0, this.firstoutput.length -1);
        document.getElementById("output-first").innerHTML = this.firstoutput;

    }

    concateString(x) {
        
        
        if(x=="." && this.firstoutput.includes(".")){
            return;
        }else{
            this.firstoutput += x;
            calculator.updateDisplay();
        } 
        //this.secondoutput = this.firstoutput;
        
    }

    updateDisplay(){
        document.getElementById("output-first").innerHTML = this.firstoutput; 
    }

    add(){
        
        if(this.firstoutput.length>0 || this.secondoutput.length>0){
        
            if(!this.secondoutput.includes("+") && !this.secondoutput.includes("-") && !this.secondoutput.includes("x") && !this.secondoutput.includes("÷")){

                if(this.firstoutput=="" && this.secondoutput!=""){
                    this.secondoutput += "+";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                }else{
                    this.firstoutput += "+";
            
                    this.secondoutput = this.firstoutput;
                    this.firstoutput = "";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                    document.getElementById("output-first").innerHTML = this.firstoutput;
                }
        
            }
        }
            

    }
    
    subtract(){

        if(this.firstoutput.length>0 || this.secondoutput.length>0){
        
            if(!this.secondoutput.includes("+") && !this.secondoutput.includes("-") && !this.secondoutput.includes("x") && !this.secondoutput.includes("÷")){
        
                if(this.firstoutput=="" && this.secondoutput!=""){
                    this.secondoutput += "-";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                }else{
                    this.firstoutput += "-";
            
                    this.secondoutput = this.firstoutput;
                    this.firstoutput = "";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                    document.getElementById("output-first").innerHTML = this.firstoutput;
                }
        
            }
        }
    }
    
    multiply(){

        if(this.firstoutput.length>0 || this.secondoutput.length>0){

            if(!this.secondoutput.includes("+") && !this.secondoutput.includes("-") && !this.secondoutput.includes("x") && !this.secondoutput.includes("÷")){
            
                if(this.firstoutput=="" && this.secondoutput!=""){
                    this.secondoutput += "x";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                }else{
                    this.firstoutput += "x";
            
                    this.secondoutput = this.firstoutput;
                    this.firstoutput = "";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                    document.getElementById("output-first").innerHTML = this.firstoutput;
                }
        
            }
        }
        
    }
    
    divide(){

        if(this.firstoutput.length>0 || this.secondoutput.length>0){
            if(!this.secondoutput.includes("+") && !this.secondoutput.includes("-") && !this.secondoutput.includes("x") && !this.secondoutput.includes("÷")){
            
                if(this.firstoutput=="" && this.secondoutput!=""){
                    this.secondoutput += "÷";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                }else{
                    this.firstoutput += "÷";
            
                    this.secondoutput = this.firstoutput;
                    this.firstoutput = "";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                    document.getElementById("output-first").innerHTML = this.firstoutput;
                }
        
            }
        }
    }

    equals(){
        if(this.secondoutput.includes("+") && this.firstoutput>=1){
            let firstvar = parseFloat(document.getElementById("output-first").innerHTML);
            let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1);
            let secondvar = parseFloat(removedOperatorStr);
            let result = firstvar + secondvar;
            this.secondoutput = result.toString();
            document.getElementById("output-second").innerHTML = result.toString();
            this.firstoutput = "";
            
            document.getElementById("output-first").innerHTML = this.firstoutput;
        

            
        }else if(this.secondoutput.includes("-") && this.firstoutput>=1){
            let firstvar = parseFloat(document.getElementById("output-first").innerHTML);
            
            let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1);
            let secondvar = parseFloat(removedOperatorStr);
            
            let result = secondvar - firstvar;
            
            this.secondoutput = result.toString();
            
            document.getElementById("output-second").innerHTML = result.toString();
            this.firstoutput = "";
            
            document.getElementById("output-first").innerHTML = this.firstoutput;
        }else if(this.secondoutput.includes("x") && this.firstoutput>=1){
            
                let firstvar = parseFloat(document.getElementById("output-first").innerHTML);
                
                let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1)
                let secondvar = parseFloat(removedOperatorStr);
                
                let result = secondvar * firstvar;
                
                this.secondoutput = result.toString();
                
                document.getElementById("output-second").innerHTML = result.toString();
                this.firstoutput = "";
                
                document.getElementById("output-first").innerHTML = this.firstoutput;

        }else if(this.secondoutput.includes("÷") && this.firstoutput>=1){
            
            let firstvar = parseFloat(document.getElementById("output-first").innerHTML);
            
            let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1)
            let secondvar = parseFloat(removedOperatorStr);
            
            let result = secondvar / firstvar;
            
            this.secondoutput = result.toString();
            
            document.getElementById("output-second").innerHTML = result.toString();
            this.firstoutput = "";
            
            document.getElementById("output-first").innerHTML = this.firstoutput;
        }  
    }
}



const onebutton = document.getElementById("one");
const twobutton = document.getElementById("two");
const threebutton = document.getElementById("three");
const fourbutton = document.getElementById("four");
const fivebutton = document.getElementById("five");
const sixbutton = document.getElementById("six");
const sevenbutton = document.getElementById("seven");
const eightbutton = document.getElementById("eight");
const ninebutton = document.getElementById("nine");
const zerobutton = document.getElementById("zero");
const pointbutton = document.getElementById("point");


const plusbutton = document.getElementById("plus");
const minusbutton = document.getElementById("minus");
const timesbutton = document.getElementById("times");
const dividebutton = document.getElementById("divide");

const acbutton = document.getElementById("ac");
const equalsbutton = document.getElementById("equals");
const deletebutton = document.getElementById("del");
const body = document.querySelector("body");


const calculator = new Calculator("", "");



onebutton.addEventListener('click', () => {
    calculator.concateString(onebutton.innerText);
    
})

body.addEventListener('keypress', (event) => {
    
    if(parseInt(event.key)==event.key){
        calculator.concateString(event.key);
    }else if(event.key=="+"){
        calculator.add();
    }else if(event.key=="-"){
        calculator.subtract();
    }else if(event.key=="x" || event.key =="*"){
        calculator.multiply();
    }else if(event.key=="/"){
        calculator.divide();
    }else if(event.key== "."){
        calculator.concateString(".");
    }else if(event.key=="Enter"){
        calculator.equals();
    }})

twobutton.addEventListener('click', () => {
    calculator.concateString(twobutton.innerText);
    
})

threebutton.addEventListener("click", () => {
    calculator.concateString(threebutton.innerText);
    
})

fourbutton.addEventListener("click", () => {
    calculator.concateString(fourbutton.innerText);
    
})

fivebutton.addEventListener("click", () => {
    calculator.concateString(fivebutton.innerText);
    
})

sixbutton.addEventListener("click", () => {
    calculator.concateString(sixbutton.innerText);
    
})

sevenbutton.addEventListener("click", () => {
    calculator.concateString(sevenbutton.innerText);
    
})

eightbutton.addEventListener("click", () => {
    calculator.concateString(eightbutton.innerText);
    
})

ninebutton.addEventListener("click", () => {
    calculator.concateString(ninebutton.innerText);
    
})

zerobutton.addEventListener("click", () => {
    calculator.concateString(zerobutton.innerText);
    
})

plusbutton.addEventListener("click", () =>{
    calculator.add();
})

minusbutton.addEventListener("click", () => {
    calculator.subtract();
})

timesbutton.addEventListener("click", () => {
    calculator.multiply();
})

dividebutton.addEventListener("click", () => {
    calculator.divide();
})

acbutton.addEventListener("click",() => {
    calculator.allclear();
})

deletebutton.addEventListener("click", () => {
    calculator.delete();
})

equalsbutton.addEventListener("click", () => {
    calculator.equals();
})

pointbutton.addEventListener("click", () => {
    calculator.concateString(pointbutton.innerHTML);
})






