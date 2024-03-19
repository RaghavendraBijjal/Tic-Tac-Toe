// name="Tony Stark";
// console.log(name);
// console.log("Raghavendra Bijjal");
// console.log("Wel-come To JavaScript")
// const product ={
//     name : "Parker standard pen",
//     price:270,
//     online:'Amazon',
//     ratings:4
// };
// console.log(product);

// const profile= {
//     Name :"Shraddha Khapra",
//     Posts: 195,
//     followers: 569,
//     following:4,
//     job:"Youtube teacher",
//     amifollow:true,
// };
// console.log(profile);

// // let num = prompt("Enter a Number ");
// // if(num%5==0){
// //     console.log("The " +num+" Number is a multiple of 5");
// // }
// // else{
// //     console.log("The "+ num +" Number is not a multiple of 5");
// // }

// // for (let i=1; i<=100; i++){
// //     if(i%2==0)
// //     console.log(i);
// // }

// let i=1;
// while(i<=10){
//     if(i%2==0){
//     console.log(i);
//     }
// }







// let num = prompt("Enter a Score To Find Out Your Grade ");
// if(num >= 80){
//     console.log("Congratulations Your Grade Is A");
// }
// else if(num>=70 && num<=79){
//     console.log("Congratulations Your Grade Is B");
// }
// else if(num>=60 && num<=69){
//     console.log("Congratulations Your Grade Is C");
// }
// else if(num>=50 && num<=60){
//     console.log("Congratulations Your Grade Is D");
// }
// else{
// console.log(" OHHH Fuck ur Fail");
// }

// let gamenum=77;
// let usernum=prompt("Guess the game number");
// while(usernum!=gamenum){
//     usernum=prompt("Guess Again");
// }
// console.log("You guessed correct number"+gamenum+" "+usernum);

 //let str=prompt("Enter Your full Name");
//  let u1="@";
//  let length= str.length;
//  console.log(u1 + str + length);
// another logic for above code

// let username = "@"+ str + str.length;
// console.log(username);

//Arrays chapter ---4

// let marks = [99, 56, 34, 66, 77, 23, 45];
// let sum=0;
// for ( let val of marks)
// {
//      sum = sum + val;
 
// }
// console.log(sum);
// let avg= sum/marks.length;
// console.log("Average "+ avg);

//using for of loop
// let price = [300 , 400 , 600, 576, 999, 577, 899]
// let i=0;
// for (let val of price)
// {
//      console.log(val);
//   let offer = val/10;
//   price[i] = price[i]-offer; 
//   console.log(`after offer price is `+ price[i]);
//   i++;
// }

// let comp = ["Bloomberg","Microsoft","IBM","Infosys","Accenture","Uber"];
//  //comp.shift();
// // comp.splice(5,1,"Ola");
// comp.push("Amazon");
// console.log(comp);

//chapter 4 Functions
// function vowels(str)
// {
//      let count=0;
//  for(let char of str){
//      if(char=='a'|| char=='e'|| char=='i'|| char=='o'|| char=='u')
//      {
//       count++;

//      }
//  }
//  console.log("The Number of vowels in the given string is"+" "+ count);
// }
//Calling a function
//vowels("raghavendrabijjal");

// //using arroe function 
// const vow=(str)=>{
//      let count=0;
//      for(let char of str){
//          if(char=='a'|| char=='e'|| char=='i'|| char=='o'|| char=='u')
//          {
//           count++;
    
//          }
// }
// console.log("The Number of vowels in the given string is"+" "+ count);
// }

// let num = [10 , 20 , 30 , 40 , 50];
// num.forEach((val)=>
// {
//     num=val*2;
//     console.log(num);
// }
// )

//array method map
// let arr = [39, 58,77 , 89, 94, 93, 90,57, 99];
//  let newArr =arr.filter((val)=>
// {
//    return val>=90;
// } )
// console.log(newArr);


// let n=prompt("Enter the number that want to create array");
// let arr =[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
//     console.log(arr);
// let sum=arr.reduce((pre,curr)=>
// {
//    //return pre+curr; 
//    return pre*curr;
// })
// console.log(sum);

//Event handling

//  let btn = document.querySelector(".butt")
//  let currmode="light";

// btn.addEventListener("click",() =>
// {
//    if(currmode==="light"){
//     currmode="dark";
//     document.querySelector("body").style.backgroundColor="black";

//    }else{
//     currmode="light";
//     document.querySelector("body").style.backgroundColor="white";
   
// }
// console.log(currmode);
// });

let data="information";

class user {
  constructor (name , email){
     this.name= name;
     this.email=email;
  }
   
  viewdata(){
console.log(data);
  }
}

let student1 = new user("Raghu","raghu@gmail.com");
let student2 = new user("Thip","thip@gmail.com");

class admin extends user{

}