    // var numbers = [[]];




    // var matrix = [
    //     [0, 1, 2, 3]
    //     [1, 0, 1, 2]
    //     [2, 1, 0, 1]
    // ];





    // for(var i = 1; i <= 10; i++){
    //     document.writeln(i + "<br>");
    // }





    // var number = +prompt("Enter a number to show its multiplication table");
    // var length = +prompt("Enter length of table");
    // for(var i = 1; i <= length; i++) {
    //     console.log(`${number} x ${i} = ${number * i}`);
    // }






    // var fruits = ["Apple","banana", "mango", "orange", "strawberry"];
    // for (var i = 0; i < fruits.length; i++) {
    //     console.log(fruits[i]);
    //     console.log(`Element at index ${i} is ${fruits[i]}`);
    // }







    //     document.writeln(`<b>Counting:</b> <br><br> `);

    // for(var i = 1; i <= 15; i++) {
    //     document.writeln(i + ",");
    // }


    // document.writeln(`<br><br><b>Reverse counting:</b> <br><br> `);
    // for(var i=10; i>= 1; i--) {
    //     document.writeln(i + ",");
    // }

    // document.writeln(`<br><br><b>Even Number:</b> <br><br> `);
    // for(var i = 0; i<=20; i++) {
    //     if(i % 2 == 0) {
    //         document.writeln(i + ",");
    //     }
    // }

    // document.writeln(`<br><br><b>Odd Number:</b> <br><br> `);
    // for(var i = 0; i<=20; i++) {
    //     if(i % 2 != 0) {
    //         document.writeln(i + ",");
    //     }
    // }


    //  document.writeln(`<br><br><b>Series:</b> <br><br> `);
    // for(var i = 1; i<=20; i++) {
    //     if(i % 2 == 0) {
    //         document.writeln(i + "k,");
    //     }
    // }





    // var bakery_items = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var order = prompt("Welcome to ABC Bakery. What do you want to order Sir/maa'm");
    // var orderfound = false;
    // for (var i = 0; i< bakery_items.length; i++) {
    //     if(order == bakery_items[i]) {
    //         document.writeln(`${order} is available at index ${i} in our bakery`);
    //         orderfound = true;
    //     }
    // }
    // if (orderfound == false) {
    //     document.writeln(`We are sorry. ${order} is not available in our bakery`);
    // }





    // var array = [24, 53, 78, 91, 12];
    // document.writeln("Array items: " + array.join(","));
    // document.writeln("<br><br>The largest number is "  + Math.max(24, 53, 78, 91, 12));



// var array = [24, 53, 78, 91, 12];
//     document.writeln("Array items: " + array.join(","));
//     document.writeln("<br><br>The smallest number is "  + Math.min(24, 53, 78, 91, 12));





for(var i = 1; i<=100; i++) {
    if (i % 5 == 0) {
        document.writeln(i + ",");
    }
}
    