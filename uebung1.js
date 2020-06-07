"use strict";


class Calculator{
    constructor(firstoutput, secondoutput, currentnumber){
        this.firstoutput = firstoutput;
        this.secondoutput = secondoutput;
        this.currentnumber = currentnumber;
    }

    allclear(){
        this.firstoutput = "";
        this.secondoutput = "";
        this.currentnumber = "";
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

        
        
            if(this.secondoutput.includes("+")==false){
        
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
            if(this.secondoutput.includes("-")==false){
            
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

            if(this.secondoutput.includes("*")==false){
            
                if(this.firstoutput=="" && this.secondoutput!=""){
                    this.secondoutput += "*";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                }else{
                    this.firstoutput += "*";
            
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
            if(this.secondoutput.includes("/")==false){
            
                if(this.firstoutput=="" && this.secondoutput!=""){
                    this.secondoutput += "/";
                    document.getElementById("output-second").innerHTML = this.secondoutput;
                }else{
                    this.firstoutput += "/";
            
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
            let firstvar = parseInt(document.getElementById("output-first").innerHTML);
            let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1)
            let secondvar = parseInt(removedOperatorStr);
            let result = firstvar + secondvar;
            this.secondoutput = result.toString();
            document.getElementById("output-second").innerHTML = result.toString();
            this.firstoutput = "";
            
            document.getElementById("output-first").innerHTML = this.firstoutput;
        

            
        }else if(this.secondoutput.includes("-") && this.firstoutput>=1){
            let firstvar = parseInt(document.getElementById("output-first").innerHTML);
            
            let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1)
            let secondvar = parseInt(removedOperatorStr);
            
            let result = secondvar - firstvar;
            
            this.secondoutput = result.toString();
            
            document.getElementById("output-second").innerHTML = result.toString();
            this.firstoutput = "";
            
            document.getElementById("output-first").innerHTML = this.firstoutput;
        }else if(this.secondoutput.includes("*") && this.firstoutput>=1){
            
                let firstvar = parseInt(document.getElementById("output-first").innerHTML);
                
                let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1)
                let secondvar = parseInt(removedOperatorStr);
                
                let result = secondvar * firstvar;
                
                this.secondoutput = result.toString();
                
                document.getElementById("output-second").innerHTML = result.toString();
                this.firstoutput = "";
                
                document.getElementById("output-first").innerHTML = this.firstoutput;

        }else if(this.secondoutput.includes("/") && this.firstoutput>=1){
            
            let firstvar = parseInt(document.getElementById("output-first").innerHTML);
            
            let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1)
            let secondvar = parseInt(removedOperatorStr);
            
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


const calculator = new Calculator("", "", "");



onebutton.addEventListener('click', () => {
    calculator.concateString(onebutton.innerText);
    calculator.updateDisplay();
})

twobutton.addEventListener('click', () => {
    calculator.concateString(twobutton.innerText);
    calculator.updateDisplay();
})

threebutton.addEventListener("click", () => {
    calculator.concateString(threebutton.innerText);
    calculator.updateDisplay();
})

fourbutton.addEventListener("click", () => {
    calculator.concateString(fourbutton.innerText);
    calculator.updateDisplay();
})

fivebutton.addEventListener("click", () => {
    calculator.concateString(fivebutton.innerText);
    calculator.updateDisplay();
})

sixbutton.addEventListener("click", () => {
    calculator.concateString(sixbutton.innerText);
    calculator.updateDisplay();
})

sevenbutton.addEventListener("click", () => {
    calculator.concateString(sevenbutton.innerText);
    calculator.updateDisplay();
})

eightbutton.addEventListener("click", () => {
    calculator.concateString(eightbutton.innerText);
    calculator.updateDisplay();
})

ninebutton.addEventListener("click", () => {
    calculator.concateString(ninebutton.innerText);
    calculator.updateDisplay();
})

zerobutton.addEventListener("click", () => {
    calculator.concateString(zerobutton.innerText);
    calculator.updateDisplay();
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
    calculator
})






