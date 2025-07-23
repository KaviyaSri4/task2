//global variable 
// let a = 10;
// function say()
// {
   // console.log("Hello world");

   // global variable call console.log("With in "+a);

   // let name="Java script"   // function scope access only within the function

    // console.log("Access with in the function "+name);
// }
// say();
// global variable call outside console.log("outside "+a);

// block scope

function voting(age){
    if(age>=18){
        
        let iscloudy=true;  // let access only inside the block eg. inside if only

        var israiny=yes; // var access outside the block also eg. outside if also

        console.log("eligible");
        console.log(iscloudy);
        console.log(israiny
            );
    }

    console.log(israiny);
   // console.log(iscloudy);  // error because let
}
voting(18);




function text(){
    console.log("message");
}
function send(callback){
    console.log("message send");
     setInterval(callback,1000);
}
send(text);

let count=0;
let Interval()=>{
    count++;
    console.log(count);
    if(count < 5){

    Interval();
}
} Interval();