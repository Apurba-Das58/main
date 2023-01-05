// var a = 10;
// var y = 12.5;
// var abc = "Mama";
// document.write("a: " + a);
// console.log("y: " + y);
// document.write("<p style ='color: Green;'> This is a Paragraph. </p>");
// document.write(" This is second Paragraph");
// document.write("<br>");
// document.write("This is Third Paragraph");
// document.write("This is Fourth Paragraph");
// document.write("<p style ='color: Blue;'> This is  Second Paragraph. </p>");
// console.log(y.toString());
// var h = "this is string";
// h.parseInt();

//  user input
//  var FirstName = prompt("Enter Your First Name");
//  var LastName = prompt("Enter Your Last Name");
//  document.write(FirstName + LastName);

// var FirstNumber = prompt("Enter Your First Number");
// var LastNumber = prompt("Enter Your Last Number");
// document.write(Number(FirstNumber) + Number(LastNumber));

// let x = "Welcome";
// let y = "to Bangladesh";

// document.write (x.concat (y));

// // function for string length - .length
// document.write("Length of Last Name " + studentLastName.length + "</br>" );

// let x = "300";
// let y = "200";
// document.write(Number(x) + Number(y));

// let x = "300";
// let y = "200";
// document.write(Number(x) - Number(y));

// var x = parsefloat (prompt("Enter Your First Number"));
//  var y = parsefloat (prompt("Enter Your Last Number");
// Document.write('Sum: ', x + y + '<br>');
// Document.write('Sub: ', x - y + '<br>');
// Document.write('Product: ', x * y + '<br>');
// Document.write('Divide: ', x / y + '<br>');
// Document.write('Modulas: ', x % y + '<br>');

// // conditional statement
// var digit =(Number (prompt("Enter Your First Number")));
// if (digit < 100)
// document.write("< 100");
// else if ( digit > 100)
// document.write("> 100");
// else if (digit > 200)
// document.write("> 200");

// // conditional statement
// var a =(Number (prompt("Enter Your First Number")));
// if (digit < 100)
// document.write("< 100");
// else if ( digit > 100 && digit <= 200)
// document.write("> 100 & <= 200");
// else if (digit > 200 && digit <= 300)
// document.write("> 200 & <= 300");

// else
// document.write("Invalid");

// // Ternary operator
// // if (digit > 0)
// // "<br/> Positive <br/>"
// // else
// // "<br/> Negative <br/>"
// var digit = (Number(prompt("Enter Any Number")));
// var print = digit > 0 ? "<br/> Positive <br/>" : "<br/> Negative <br/>";
// document.write(print);
//

// switch case

// var digit = prompt("Enter any number");
// var t = parseInt(digit / 10);
// switch (t) {
//   case 10:
//   case 9:
//   case 8:
//     document.write("<br/> A+");
//     break;
//  case 7:
//     document.write("<br/> A");
//     break;
//     case 6:
//     document.write("<br/> B");
//     break; 
//     default:
//         document.write("<br/> Invalid")

// }



// var ShowLetter = prompt("Enter String").toUpperCase();

// switch(ShowLetter) {

//   case 'A': document.write("<br/> A has been pressed");
//     break;

//  case 'B': document.write("<br/> B has been pressed);  
//     break;
//     case 'C': document.write("<br/> C has been pressed"); 
//         break; 
 

// }


// var i = 1;
// for (  var i = 0; i <= 10; i++)
// {
// document.write(i + '<br/>')

// }


// var i = 1;
// while (i <= 10)
// {
//     document.write(i + '<br/>');
//     i++;    
// }
// do {
//     document.write(i+"<br>");
//     i++;
// }
// while(i<= 12)



// Without function
// var num = 3;
// document.write("<br> Result is: " +num * num);

// var num = 4;
// document.write("<br> Result is: " +num * num);

// var num = 5;
// document.write("<br> Result is: " +num * num);


// Using function
// function square(){
//     var num = 6;
//     document.write("<br/> Result is: " +num * num);
// }
// square();



// Using function
// function math(){
//     var num1 = 2;
//     var num2 = 3;
//     var num3 = 4;
//     document.write("<br/> Addition is:" + (+num1+num2+num3));
//     document.write("<br/> Subtraction is:" + (+num3-num2-num1));
//     document.write("<br/> Multiplication is:" + (+num3*num2*num1));
//     document.write("<br/> Division is:" + (+num3/num1/num3));
// }
// math();



// parameter function
// function square(num1,num2,num3){
//     document.write("<br/> Parameter function result is: " + (+num1+num2+num3));
//     document.write("<br/> Parameter function result is: " + (+num1-num2-num3));
//     document.write("<br/> Parameter function result is: " + (+num3*num2*num1));
//     document.write("<br/> Parameter function result is: " + (+num3/num1/num3));
// }
// square(2,3,4);




// using prompt

// let Name= prompt("Enter your Name");
// let Password= prompt("Enter your Password");
// user (Name, Password)

// function user (name, password){
//     document.write("<br/>  Name: " + name);
//     document.write("<br/> Password: " + password);

// }


// Invokeable function
// (function user(a) {
//     document.write("<br/> IIFEs Immediately Invokeable function Expressions: "+a*a);
// }
// ) (10);





// Invokeable function
// (function user(a,b) {
//     document.write("<br/> IIFEs Immediately Invokeable function Expressions: "+a*b);
// }
// ) (10,5); 







// Array
// var names = ["John", "David", "Alice", "Tom"];
// document.write(names+"<br> <br>");

// document.write(names[0]+ "<br>");
// document.write(names[1]+ "<br>");
// document.write(names[2]+ "<br>");
// document.write(names[3]+ "<br> <br>");


// var list= new Array [5];
// for (i=0; i<4; i++);
// list[i]= prompt("Enter"+ i +"index number");

// for (var i = 0; i<names.length; i++)
// document.write("<h1 style= 'color:red'>"+names[i]+ "</h1>");

// for (var i = 0; i<names.length; i++)
// document.write("<h1 style= 'background:lightgray'>"+names[i]+ "</h1>");

// var namestype2 = new Array();
// var namestype3 = new Array (5);



// taking inputs with array
// var myList = new Array(5);
// for(var i=0;i< myList.length; i++)
//     myList[i] = prompt ("Enter" + i + "index number");
// for(var i=0; i<myList.length; i++)
//     document.write(myList[i]+ "<br>");



// Print Array
// var namesType = new Array();
// var namesType2 = new Array();

// namesType[0] = "Arman";
// namesType[1] = "Mozahid";
// namesType2[0] = "Shamim";
// namesType2[1] = "Roman";


document.write(namesType.concat(namesType2))+"<br>";
// document.write(namesType4 + ", <br>");


// Type of print array
// var namesType2 = new Array();
// var namesType3 = new Array();
// var namesType4 = new Array();
// var sortedNames = new Array();


// find the highest score from the given user inputs.
num[0] = "12";
num[1] = "13";
num[2] = "14";
num[3] = "15";
document.write






