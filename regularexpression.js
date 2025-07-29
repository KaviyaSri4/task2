/* let enter = 1122334405
let number=/^[1-5]\d{9}$/;
if(number.test(enter.toString())){
    console.log("Correct");
}
else{
    console.log("Wrong pattern");
} */

let text = "hi, hello";
let word=text.match (/\bh\w+o\b/gi);  // bh- h for string start with h so h   w+o  o for ends with o so  
console.log(word);

// output hello because  hello only start wit h and ends with o