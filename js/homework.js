// console.log('Test');

//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
class Person{
    constructor (name, age){
        this.name=name;
        this.age=age;
}
    // create the printInfo method
    printInfo = function PrintInfo() {
        console.log(`${this.name} is ${this.age} years old`);
        };
    // Create another method for the addAge method
    addAge = function addAge(amount){
        console.log(`adding ${amount} to ${this.name}'s age.`)
        this.age += amount
        };
}

const juan = new Person ('Juan', 25);

// create the printInfo method

// Create another method for the addAge method




//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0) {
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
}


console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


