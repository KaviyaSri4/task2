let currenttime = new Date();
console.log(currenttime);
let local = currenttime.toString();
console.log(hours);
let hours = currenttime.getHours();
console.log(hours);
let minits = currenttime.getMinits();
console.log(minits);
let Day = currenttime.getDay();
console.log(Day);

class Exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
 }
 let result=new Exam("John");

 class Bank{
    constructor(initalamount=0){
        this._balance=initalamount;
    }
    get balance(){
        return this._balance;
    }
    set balance(amountdeposit){

        if(amountdeposit>0){

            this.balance += amountdeposit;
            console.log(_balance);
        }

    }
        
    
 }

 let add=new Bank(10);
 console.log(add);
 add.balance=400;
 console.log(add);

 class Addition{
    static Math(a,b){

    }
 }

 console.log(Addition.Math(4,4));

 //mathutil.js

 export function add(a,b){
    return a + b;
 }

 export const pi=3.14;

 //main.js

 import{add,pi} from './mathutil.js'

 console.log(add(10,20));
 console.log(pi);