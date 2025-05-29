// var studentName = [];



// var cities = ["Karachi", "Lahore",  "Islamabad", "Quetta", "Peshawar"];



// var evenNumbers = [2,4,6,8,10,12];



// var boolean = [true, false];



// var mixedArray = ["Ali", "car", 2, 9, 0.67, 3.28, true, false];




// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M.Phil", "PhD"];
// document.writeln("<b>Qualifications</b><br><br><br>");
// document.writeln("1) " + qualifications[0] + "<br>");
// document.writeln("2) " + qualifications[1] + "<br>");
// document.writeln("3) " + qualifications[2] + "<br>");
// document.writeln("4) " + qualifications[3] + "<br>");
// document.writeln("5) " + qualifications[4] + "<br>");
// document.writeln("6) " + qualifications[5] + "<br>");
// document.writeln("7) " + qualifications[6] + "<br>");
// document.writeln("8) " + qualifications[7] + "<br>");




// var names = ["Michael", "John" , "Tony"];
// var score = [320, 230, 480];
// var totalScore = 500;
// var percentage1 = score[0]/500 *100;
// var percentage2 = score[1]/500 *100;
// var percentage3 = score[2]/500 *100;
// document.writeln("Score of " + names[0] + " is " + score[0] + ". Percentage: " + percentage1 + "% <br>" );
// document.writeln("Score of " + names[1] + " is " + score[1] + ". Percentage: " + percentage2 + "% <br>" );
// document.writeln("Score of " + names[2] + " is " + score[2] + ". Percentage: " + percentage3 + "% <br>" );




// var colors = ["red", "blue", "green", "black", "yellow"];
// document.writeln(colors + "<br><br>");

// var start_add = prompt("Enter the color you want to add in beginning");
// colors.unshift(start_add);
// document.writeln("Updated Array <br>" + colors + "<br><br>");

// var end_add = prompt ("Enter the color you want to add in the last");
// colors.push(end_add);
// document.writeln("Updated Array <br>" + colors + "<br><br>");

// colors.unshift("white", "grey");
// document.writeln("Updated Array <br>" + colors + "<br><br>");

// colors.shift();
// document.writeln("Updated Array <br>" + colors + "<br><br>");

// colors.pop();
// document.writeln("Updated Array <br>" + colors + "<br><br>");

// var new_arr = prompt ("Enter the index at which you want to add color");
// var new_arr2 = prompt ("Enter the color you want to add");
// colors.splice(new_arr, 0 , new_arr2);
// document.writeln("Updated Array <br>" + colors + "<br><br>");

// var new_ar3 = prompt ("Enter the index at which you want to delete color");
// var new_arr4 = prompt ("How many colors you want to delete");
// colors.splice(new_ar3, new_arr4);
// document.writeln("Updated Array <br>" + colors + "<br><br>");



// var scores = [320, 230, 480, 120];
// document.writeln("Scores of Students " + scores + "<br>");
// scores.sort();
// document.writeln("Ordered Scores of Students " + scores);



// var cities = ["Karachi", "Lahore",  "Islamabad", "Quetta", "Peshawar"];
// document.writeln("Cities List: <br>" + cities + "<br><br>");
// var selectedCities = cities.slice(2, 4);
// document.writeln("Selected Cities List: <br>" + selectedCities);



// var arr = ["This", "is", "my", "cat"];
// document.writeln("Array: <br> " + arr + "<br");
// var new_array = arr.join(" ")
// document.writeln("String: <br>" + new_array);




// var devices = ["Keyboard", "mouse", "printer", "monitor"];
// document.writeln(devices[0] +"<br>");
// document.writeln(devices[1] +"<br>");
// document.writeln(devices[2] +"<br>");
// document.writeln(devices[3] +"<br>");




// var devices = ["Keyboard", "mouse", "printer", "monitor"];
// devices.reverse();
// document.writeln(devices[0] +"<br>");
// document.writeln(devices[1] +"<br>");
// document.writeln(devices[2] +"<br>");
// document.writeln(devices[3] +"<br>");



var manufacturers = ["Apple", "Samsung", "Motrola", "Nokia", "Sony", "Haier"];
document.writeln("<select>");
document.writeln("<option>" + manufacturers[0] +"</option>");
document.writeln("<option>" + manufacturers[1] +"</option>");
document.writeln("<option>" + manufacturers[2] +"</option>");
document.writeln("<option>" + manufacturers[3] +"</option>");
document.writeln("<option>" + manufacturers[4] +"</option>");
document.writeln("<option>" + manufacturers[5] +"</option>");
document.writeln("</select>");
