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
       
    }

    concateString(x) {
        
        this.firstoutput += x;
        //this.secondoutput = this.firstoutput;
        
    }

    updateDisplay(){
        document.getElementById("output-first").innerHTML = this.firstoutput; 
    }

    add(){
        
        if(this.secondoutput.includes("+")==false){
            this.firstoutput += "+";
        this.secondoutput = this.firstoutput;
        this.firstoutput = "";
        document.getElementById("output-second").innerHTML = this.secondoutput;
        document.getElementById("output-first").innerHTML = this.firstoutput;
        }
        

    }
    
    subtract(){
       var g;
    }
    
    multiply(){
        var g;
    }
    
    divide(){
    
    }

    equals(){
        if(this.secondoutput.includes("+") && this.firstoutput>=1){
            let firstvar = parseInt(document.getElementById("output-first").innerHTML);
            let removedOperatorStr = this.secondoutput.substring(0, this.secondoutput.length -1)
            let secondvar = parseInt(removedOperatorStr);
            let result = firstvar + secondvar;
            document.getElementById("output-second").innerHTML = result.toString();
            this.firstoutput = "";
            this.secondoutput = Integer.toString(result);
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


const plusbutton = document.getElementById("plus");
const minusbutton = document.getElementById("minus");
const timesbutton = document.getElementById("times");
const devidebutton = document.getElementById("devide");

const acbutton = document.getElementById("ac");
const equalsbutton = document.getElementById("equals");


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

acbutton.addEventListener("click",() => {
    calculator.allclear();
})

equalsbutton.addEventListener("click", () => {
    calculator.equals();
})





