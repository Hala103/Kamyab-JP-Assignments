// var today = new Date();
// document.writeln(today);






// var  today = new Date();
// var month_index = today.getMonth();
// var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month = (arr[month_index]);
// document.writeln(`Current month: ${month}`);






// var  today = new Date();
// var day_index = today.getDay();
// var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day = (arr[day_index]);
// var abbr_day = day.slice(0, 3);
// document.writeln(`Today is ${abbr_day}`);





// var  today = new Date();
// var day_index = today.getDay();
// var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day = (arr[day_index]);
// if(day_index == 6 || day == 0 ) {
//     document.writeln(`It's Fun day`);
// } else {
//     document.writeln(`Today is ${day}. It's not Fun day`);
// }





// var today = new Date();
// var date = today.getDate();
// if( date < 16) {
//  document.writeln(`First fifteen days of the month`); 
// } else {
//     document.writeln(`Last days of the month`)
// }




// var today = new Date();
// var ms = today.getTime();
// var min = ms / (1000 * 60)

// document.writeln(`Current Date ${today}`+ "<br>");
// document.writeln(`Elapsed milliseconds since Jan 1, 1970: ${ms} `+ "<br>");
// document.writeln(`Elapsed minutes since Jan 1, 1970: ${min}`+ "<br>")







// var today = new Date();
// var hour = today.getHours();
// if(hour < 12) {
//     alert("Its AM");
// }else {
//     alert("Its PM");
// }





// var laterdate = new Date("2020-12-31");
// document.writeln(`Later date: ${laterdate}`);





// var today = new Date();
// var ramdan = new Date ("2025-03-01");
// var time = today.getTime() - ramdan.getTime();
// var dayspassed = Math.floor(time / (1000 * 60 * 60 * 24));
// document.writeln(`${dayspassed} days have passed since 1st Ramadan, 2025`); 




// var today = new Date();
// var ref_date = new Date("2025-01-01");
// var time = today.getTime() - ref_date.getTime();
// var secondspassed = Math.floor(time / 1000);
// document.writeln(`On refrence date: ${today},` +"<br>" + `${secondspassed} seconds had passed since begining of 2025`);






// var today = new Date();
// document.writeln(`Current date: ${today}`+ "<br>");
// var hours = today.getHours();
// today.setHours(hours + 1);
// document.writeln(`1 hour later, it will be :  ${today}`);





// var today = new Date();
// document.writeln(`Current Date:  ${today}` + "<br>");
// var year = today.getFullYear();
// today.setFullYear(year-100);
// document.writeln(`100 years back, it was:  ${today}`);





// var age = +prompt("Write your age");
// document.writeln(`Your age is ${age}`+ "<br>");
// var today = new Date();
// var currentyear = today.getFullYear();
// var birthyear = currentyear - age;
// document.writeln(`You birth year is ${birthyear}`);






var customer = prompt("Write your name");
var today = new Date();
var month_index = today.getMonth();
var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = arr[month_index];
var units = +prompt("Tell us your current month's unit");
var charges = 16;
var net_amount = units * charges;
var surcharge = 350; 
var gross_amount = net_amount + surcharge;
    
document.writeln(`Customer name: ${customer}` +"<br>");
document.writeln(`Current month:  ${month}`+"<br>");
document.writeln("No. of Units: " + units + "<br>");
document.writeln("Charges per unit: " + charges + "<br>");
document.writeln("Net Amount Payable (within Due Date): " + net_amount + "<br>");
document.writeln(`Late Payment surcahrge: ${surcharge}`+ "<br>");
document.writeln("Gross Amount Payable (after Due Date) : " + gross_amount);