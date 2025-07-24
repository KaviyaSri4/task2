//array
//let numbers=[4,"Four",true];

//let names=new Array("John","james");

//console.log(numbers[1]);
//console.log(names.length);

//filter

//let number=[1,2,3,4,5];
//let result=number.filter(number => number[1]);
//console.log(result);

//slice

//let number=[1,2,3,4,5];
//let r=number.splice(1,3,"hi");  // splice operator remove index vlu 2 & for 3 index will replace into hi
//console.log(number)

//let details={
  //  name:"Kaviya",
   // totalmarks:"100"

//}
//console.log(details.totalmarks); // one way to call
//console.log(details["name"]); // another way to call

/*let details={
      name:"Kaviya",
      totalmarks:"100",
  // nested obj

   subject:{

    python:100,
    java:100,
   },

   avg:function(){

    let sum=parseInt(this.subject.java+this.subject.python);
    return sum;
}

  }
  console.log(details.totalmarks); // one way to call
  console.log(details["name"]); // another way to call
  console.log(details.subject.java);
  console.log(details.subject.python);
  console.log(details.avg());*/

  // destructer 

 /* const person={
    name:"Kaviya Sri",
    age:18,
    college:"KG"

  };
  console.log(person);

  const{name,age,college}=person;*/


  // array Destruturing

  const person=["Kaviya Sri",18,"Full stack developer"];
  const[name,age,dis]=person;
  console.log(name+" "+age+" "+dis);



