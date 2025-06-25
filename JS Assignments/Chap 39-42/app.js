// function leapYear (year) {
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         document.writeln("Its a leap year");
//     } else {
//         document.writeln("Its not a leap year")
//     }
// }

// leapYear(2017)





// function sValue (a, b, c) {
//     var valueS = (a + b + c) / 2;
//     return valueS;
// }
// function calArea(a, b, c) {
//     var s = sValue(a, b, c);
//     var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     return area;
// }
// var totalArea = calArea(2,2,2);
// document.writeln(`Total area of triangle is ${totalArea.toFixed(2)}`);






// var english = +prompt("Write your english marks");
//     var urdu = +prompt("Write your urdu marks");
//     var maths = +prompt("Write your maths marks");
//     var total = 300;

// function average(english, urdu, maths){
//     return (english + urdu + maths) / 3;
// }
// function percentage (english, urdu, maths, total){
//     return ((english + urdu + maths) /total)* 100;
// }
// function main(english, urdu, maths, total) {
//     var obt = english + urdu + maths;
//     var av = average(english, urdu, maths, total);
//     var per = percentage(english, urdu, maths, total)
//     console.log(`English ${english}`);
//     console.log(`urdu ${urdu}`);
//     console.log(`Maths ${maths}`);
//     console.log(`Total Marks ${total}`);
//     console.log(`Obtained marks ${obt}`)
//     console.log(`Average ${av}`);
//     console.log(`percentage ${per.toFixed(2)}%`);
// }
// main(english, urdu, maths, total);








// function index (str, value) {
//     var i = 0;
//     while(i< str.length) {
//          i++;
//         if (str[i] == value){
//             console.log(i);
           
//         }
//     }
// }

// index("welcome", "o")
// index("college", "l")








// function removeVowels(str){
//     var result= "";
//     var vowels = "aeiouAEIOU"
//     for (var i =0; i < str.length; i++){
//         if(!vowels.includes(str[i])) {
//         result = result + str[i];
        
//     }
//   }
//   console.log(result)
// }
// removeVowels("hello world")







// function coversion(distance) {
//     return distance * 1000;
// }
// var totalDistance = coversion(40);
// document.writeln(`The distance between two cities is ${totalDistance}m`);

// function coversion(distance) {
//     return distance * 3281;
// }
// var totalDistance = coversion(40);
// document.writeln(`The distance between two cities is ${totalDistance} foot`);

// function coversion(distance) {
//     return distance * 39370;
// }
// var totalDistance = coversion(4);
// document.writeln(`The distance between two cities is ${totalDistance} inches`);

// function coversion(distance) {
//     return distance * 100000;
// }
// var totalDistance = coversion(4);
// document.writeln(`The distance between two cities is ${totalDistance} cm`);







// function overtime(hours){
//     return (hours - 40) * 12;
// }
// var payment = overtime(50);
// document.writeln(`Total payment for overtime is Rs.${payment}`)