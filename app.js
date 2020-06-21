// ASSIGNMENT 21-25

// task 1
// var fs = window.prompt("ENTER FIRST NAME ") ;
// var ls = window.prompt("ENTER LAST NAME ") ;
// var fullname = fs +' '+ ls ;
// alert(" welcome " + fullname);

//task 2
// var fs = window.prompt("ENTER YOUR FAVORITE MOBILE MODEL ") ;
// document.write("length of string is :" + fs.length );

//task 3
// var str = "Pakistani";
// document.write("String:" +str+ "<br>" + "Index of 'n':" + str.indexOf("n"));

//task 4
//  var str = "Hello World";
//  document.write("String:" +str+ "<br>" + "Index of 'l':" + str.lastIndexOf("l"));

//task 5
// var str = "Pakistani";
// document.write("String:" +str+ "<br>" + "Character at index '3':" + str.charAt(3));

//task 6
// var fs = window.prompt("ENTER FIRST NAME ") ;
// var ls = window.prompt("ENTER LAST NAME ") ;
// var fullname = fs.concat(" ", ls);
// alert(" welcome " + fullname);

//task 7
// var str = "Hyderabad";
// document.write("City: Hyderabad" +"<br>"+ "After Replacement:" + str.replace("Hyder", "Islam"));

//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("var message = " + message.replace(/and/g,'&'));

//task 9
// var no = "472";
// document.write("Value: 472 "+ "<br>" + "Type: " +typeof(no)+"<br>");
// var int = parseInt(no);
// document.write("Value: 472 " + "<br>" + "Type: " +typeof(int));

//task 10
// var ui = window.prompt("INPUT ") ;
// document.write("User Input: " + ui + "<br>" + "Upper Case: " + ui.toUpperCase());\

//task 11
// var ui = window.prompt("INPUT ") ;
// document.write("User Input: " + ui + "<br>" + "Title Case: " + ui.charAt(0).toUpperCase() + ui.substring(1).toLowerCase());

//task 12
// var num = 35.36 ;
// var str = num.toString();
// document.write("Number: "+num+"<br>"+"Result: "+str.replace(".", ""));

//task 13
// var specialChars = "@.,?";
// var checkForSpecialChar = function (string) {
//   for (i = 0; i < specialChars.length; i++) {
//     if (string.indexOf(specialChars[i]) > -1) {
//       return true
//     }
//   }
//   return false;
// }

// var str = window.prompt("Enter Username");
// if (checkForSpecialChar(str)) {
//   alert("Please Enter a valid Username");
// } else {
//   alert("Welcome" + " " + str);
// }

//task 14
// var menu = ["cake", "apple pie", "cookie", "chips", "patties"];
// var item = window.prompt("Welcome to SUY bakery . What do you want to order \nSir/Ma'am?");
// var itm = item.toLowerCase();
// var str = "available" ;
// var strb = "Not available" ;

// if (menu.indexOf(itm) > -1) {
//    document.write(item + " is " + str.bold() +" at index " + menu.indexOf(itm) + " in our bakery ");
//  }
// else {
//   document.write("We are sorry " + item + " is " + strb.bold() + " in our bakery " );
//  }

//task 15
// var inp = window.prompt("Enter A Pwd");
// var passw = /^[A-Za-z]\w{7,14}$/;
// if (inp.match(passw)) {
//   alert('pwd set'); 
// }
// else { 
//   document.write("Entered Password: " + inp +"<br>");
//   document.write("a. It should contain alphabets and numbers"+"<br>" + "b. It should not start with a number " + "<br>" + "c. It must at least 6 characters long");
// }

//task 16
// var str = "University Of Karachi";
// var scripts = str.split("");
// for (i=0;i<scripts.length;i++)
// {
// document.write(scripts[i] + "<br >");
// }

//task 17
// var str = window.prompt("Input Please");
// document.write("User Input " + str + "<br>");
// var n = str.length;
// document.write("last character of Input: " + str.charAt(n-1));


//task 18
// var temp = "The quick brown fox jumps over the lazy dog";
// var real = temp.toLowerCase();
// var count = (real.match(/the/g) || []).length;
// document.write(count);



// QUESTION 26-30

// Task 1
//     var no = window.prompt("enter positive integer");
//     document.write(no+" <br>");
//     document.write(Math.round(no)+"<br> ")
//     document.write(Math.floor(no)+"<br> ")
//     document.write(Math.ceil(no)+" <br>")
//


// Task 2
//     var no =window.prompt("enter a negative floating point value")
//     document.write(Math.abs(no) +"<br>"+ Math.round(no) +"<br>"+ Math.ceil(no) +" <br>"+  Math.floor(no));
//

// Task 3
// var no = window.prompt("enter a negative no ")
// document.write(Math.abs(no))


// Task 4
// document.write("dice random value is " +Math.round( Math.random()*6));

//Task 5
// var no= Math.round( Math.random());
// document.write(no+"<br>")

// if (no<1){
//     document.write("heads");

// }
// else{
//     document.write("tails");
// }

//Task 6
//document.write("dice random value in between 100 <br>" +Math.round( Math.random()*100));

//Task 7
// var no = window.prompt("enter your weight")
// document.write("the weight of the user is "+parseInt(no)+" kilograms")

//Task 8
// var secretno = Math.round(Math.random() * 10)
// var guess = window.prompt("enter a guess for a secret no between 0-10")

// if(secretno==guess){
//     document.write("congrats")
// }
// else{
//     document.write("try again")
//}



// QUESTION 31-34

// used in every task
//var today = new Date();

//Task 1

//alert(today)

//Task 2
//alert(today.getMonth())

//Task 3
//var day = today.getDay();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// document.write("Today is " +daylist[day])


//Task 4
// var day = today.getDay();
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

// if(day == 0 || day == 5 || day == 6){
//     document.write("its fun day")

// }
// else{

// document.write("Today is " + daylist[day])
// }


//Task 5
// var date=today.getDate();
// if (date <16){
//     document.write("first fifteen days of the month")
// }
// else{
//     document.write("last fifteen days of the month")
// }


//Task 6

// var d = new Date("07/21/1983");
// var d2 =new Date("06/21/2020");
// var milliseconds = d2.getTime() - d.getTime();
// alert(milliseconds)

//Task 7

// var n = today.getHours();
// if(n>12){
//       alert("its pm")
// }
// else{
//     alert("its am")
// }


//Task 8
// var LmDate = new Date();
// LmDate.setMonth(LmDate.getMonth(), 0);
// alert(LmDate)

//Task 9
// var date1 = new Date("06/18/2015");
// var date2 = new Date("06/21/2020");

// // To calculate the time difference of two dates
// var Difference_In_Time = date2.getTime() - date1.getTime();

// // To calculate the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// //To display the final no. of days (result)
// document.write("Total number of days between dates  <br>" + Difference_In_Days);

//Task 10

// var date1 = new Date("01/01/2015");
// var date2 = new Date("06/21/2020");

// // To calculate the time difference of two dates
// var Difference_In_Time = date2.getTime() - date1.getTime();

// // To calculate the no. of days between two dates
// var seconds_difference = Difference_In_Time / (1000 );

// //To display the final no. of days (result)
// document.write("Total number of seconds between dates  <br>" + seconds_difference);

//Task 11
// var dt = new Date();
// document.write("Current Date: "+dt);
// dt.setHours(dt.getHours() -1);
// document.write("<br>Updated Date: "+dt);

//Task 12
// var dt = new Date();
// document.write("Current Date: "+dt);
// dt.setDate(dt.getDate() -36500 );
// document.write("<br> 100 year back date is: "+dt);

//Task 13
// var dt = new Date();
// document.write("Current Date: " + dt);
// var age = window.prompt("enter your age");
// dt.setDate(dt.getDate() -age*365);
// document.write("<br>your birth year is " + dt.getFullYear());

//Task 14
// var name, month, unit, chargeunit, netamount, latepayment = 100, grossamount;
// name = window.prompt("enter name");
// month = window.prompt("enter month");
// unit = window.prompt("enter unit");
// chargeunit = window.prompt("entr charge");
// netamount = unit * chargeunit;
// grossamount = netamount + latepayment;

// document.write(" K-ELECTRIC BILL <br> CUSTOMER NAME : " + name + "<br> MONTH : " + month + " <br>NUMBER OF UNITS : " + unit + " <br><br>CHARGES PER UNIT : " + chargeunit + "<br>gross amount : " + grossamount);


//Question 36-38
//function date(){
  //     var d= new Date();
  //     document.write(d);
  // }
  // // date();
  // function greetings(frstname,lstname){
  // document.write("Hello Mr"+frstname+" "+lstname);
  // }
  // // /greetings("jawad","khan");
  
  // function add(){
  //     var num1=parseInt(prompt("Enter a number"));
  //     var num2=parseInt(prompt("Enter a number"));
  //     var ttl=num1+num2;
  //     return ttl;
  // }
  // //var temp=add();
  // // document.write(temp);
  // function calculator(num1,num2,operator){
  //     var ttl;
  //     if(operator=="+"){
  //         ttl=num1+num2;
  //     }
  //     else if(operator=="-"){
  //         ttl=num1-num2;
  //     }
  //     else if(operator=="*"){
  //         ttl=num1*num2;
  //     }
  //     else if(operator=="/"){
  //         ttl=num1/num2;
  //     }
  //     return ttl;
  // }
  // // var temp=calculator(1,2,"+");
  // // document.write(temp);
  
  // function squares(num){
  //     var ttl=Math.pow(num,2);
  //     document.write(ttl);
  // }
  // //squares(3);
  
  // function factorial(num){
  //     var temp=1;
  //     for(var i=1;i<=num;i++){
  //        temp*=i; 
  //     }
  //     document.write(temp);
  // }
  // // factorial(3)
  // function counting(frstNum,lstNum){
  //     for(var i=frstNum;i<=lstname;i++){
  //         document.write(i+"<br>");
  //     }
  // }
  // //counting(1,10)
  
  // function calHypot(base,prpndlr){
  //     function calSquare(){
  //         base=Math.pow(base,2);
  //         prpndlr=Math.pow(prpndlr,2);
  //         document.write(base+" "+prpndlr+"<br>")
  //     }
  //     calSquare();
  //     var hypotenuse=Math.sqrt(base+prpndlr);
  //     document.write(hypotenuse);
  // }
  // //calHypot(2,3);
  // function rectangle(width=3,height=4){
  //     var area=width*height;
  //     document.write(area);
  // }
  // // rectangle(5,3);
  // // rectangle();
  // function palindrom(str){
  //     var len = str.length;
  //     for (var i = 0; i < len/2; i++) {
  //       if (str[i] !== str[len - 1 - i]) {
  //           return false;
  //       }
  //     }
  //     return true;
  // }
  // // var flag=palindrom("madam");
  // // if(flag==true){
  // //     document.write("ok");
  // // }
  // // else{
  // //     document.write("Not ok");
  // // }
  
  // function uppercase(str){
  //     var lower = String(str).toLowerCase();
  //     return lower.replace(/(^| )(\w)/g, function(x) {
  //       return x.toUpperCase();
  //     });
  // }
  // // document.write( uppercase("madam yes"));
  // function find_longest_word(str)
  // {
  //   var array1 = str.match(/\w[a-z]{0,}/gi);
  //   var result = array1[0];
  
  //   for(var x = 1 ; x < array1.length ; x++)
  //   {
  //     if(result.length < array1[x].length)
  //     {
  //     result = array1[x];
  //     } 
  //   }
  //   return result;
  // }
  // // document.write(find_longest_word('Web Development Tutorial'));
  // function char_count(str, letter) 
  // {
  //  var letter_Count = 0;
  //  for (var position = 0; position < str.length; position++) 
  //  {
  //     if (str.charAt(position) == letter) 
  //       {
  //       letter_Count += 1;
  //       }
  //   }
  //   return letter_Count;
  // }
  
  // // document.write(char_count('w3resource.com', 'o'));
  
  // function circle(radius)
  // {
  //     this.radius = radius;
  //   // area method
  //     this.area = function () 
  //     {
  //         return Math.PI * this.radius * this.radius;
  //     };
  //   // perimeter method
  //     this.perimeter = function ()
  //     {
  //         return 2*Math.PI*this.radius;
  //     };
  // }
  // var c = new circle(3);
  // console.log('Area =', c.area().toFixed(2));
  // console.log('perimeter =', c.perimeter().toFixed(2));