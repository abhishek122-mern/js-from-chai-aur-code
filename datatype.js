//const user={
    //username:"abhishek",
    //price:100,

    //welcomeMessage: function(){
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
        ////}

//}
//user.welcomeMessage();
//user.username='abhi'
//user.welcomeMessage();


//const chai= function() {
    //let username='shyam';
    //console.log(this.username);
//}
//chai();

//const chai= () =>{
    //let username='shyam';
    //console.log(this.username);
////}
//chai();

//const chai= () =>{
    //let username='shyam';
    //console.log(this);
//}
//chai();
//arrow function//
//const addTwo= (num1, num2) =>{
    //return num1+num2;

//}
//console.log(addTwo(3, 6))
//implicit return//
//const addTwo= (num1, num2) => num1+num2;
//console.log(addTwo(3, 6))

//const addTwo= (num1, num2) => ({username:"abhi"})  ////without it undefined out
//console.log(addTwo(3, 6))
// iife function
//(function chai(){  global scoope k pollution se problem hiti hai kai bar to us global scope k declaration hai uske hatane k liye
   // console.log('here');
//}// named iife
//)()

// array function 
//( ()=>{
    //console.log('herearr')

//})()

//for()
// Correct element selection
////const imageContainerEl = document.querySelector(".image-container");
////const btnEl = document.querySelector(".btn");

//btnEl.addEventListener("click", () => {
    //console.log("clicked");
//});

        //function addNewImages() {
            //for (let i = 0; i < 10; i++) {
                //const newImgEl = document.createElement("img");
               // newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 200)}`;
                //imageContainerEl.appendChild(newImgEl);
           // }
       // }//
       //const imageContainerEl = document.querySelector(".image-container"); 



       //const searchBarContainerEl = document.querySelector(".searchbar-container");
       //const magnifierEl = document.querySelector(".magnifier");
       
       //magnifierEl.addEventListener("click", () => {
        //   searchBarContainerEl.classList.toggle("active");
      // });
       
    ////

    //function calculateLoan() {
        // Declare variables and get input values
        //let loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
       // let interestRateValue = parseFloat(document.getElementById("interest-rate").value);
        //let monthToPaysValue = parseFloat(document.getElementById("month-pay").value);
    
        // Calculate interest and monthly payment
       //let interest = (loanAmountValue * (interestRateValue * 0.01)) / monthToPaysValue;
        //let monthlyPayment = (loanAmountValue / monthToPaysValue) + interest;
    
        // Display the result with two decimal places
        //document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
    //}
   // const dayEl=document.getElementById("day");
    //const hourEl=document.getElementById("hour");
    //const MinuteEl=document.getElementById("minute");
    //const secEl=document.getElementById("sec");
   
    // const newYearDate=new Date("jan 1,2026 03:30:00").getTime()
   //function updateCountdown(){
           //  const now=new Date().getDate();
          //   const gap=newYearDate-now;
           //  const sec=1000;
           //  const minute=sec*60;
           //  const hour=minute*60;
           //  const day=hour*24;
           //  const d=Math.floor(gap/day)
           // const h=Math.floor((gap%day//))
             
  // }