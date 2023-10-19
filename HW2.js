//==========Exercise #1 ===========//

// list of foods my person like//
let person3 = {
    pizza: ["Deep Dish","South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate","Vanilla","Oreo"],
    shakes: [
        {
            otherwise: "Chocolate",
            dunkin: "Vanilla",
            culvers: "All of them",
            mcDonalds: "Sham-rock-shake",
            cupids_candies: "Chocolate Malt",
        },
    ],
};

// Handling the "food item" property within the function//
function displayFavoriteFoodDishes(person) {
    for (const key in person) {
      if (Array.isArray(person[key])) {
        console.log(`${key} likes:`);
        
        person[key].forEach((dish) => {
          console.log(`  - ${dish}`);
        });
      } 
      else if (typeof person[key] === 'string') {
        console.log(`${key} likes: ${person[key]}`);
      } 
      else if (typeof person[key] === 'object') {
        console.log(`${key} likes:`);
        
        for (const restaurant in person[key][0]) {
          console.log(`  - ${restaurant}: ${person[key][0][restaurant]}`);
        }
      }
    };
  
    // Handling the "shakes" property within the function//
    if (Array.isArray(person.shakes)) {
      console.log("shakes likes:");
      for (const shake in person.shakes[0]) {
        console.log(`  - ${shake}: ${person.shakes[0][shake]}`);
      }
    }
  }

displayFavoriteFoodDishes(person3);

//==========Exercise #2 ===========//

// Create our Person Prototype//
function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
// Use an arrow function to create the printInfo method//
Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};
  
// Create another arrow function for the addAge method that takes a single parameter//
// Adding to the age//
Person.prototype.addAge = function (years) {
    this.age += years;
};
  
// Create two people using the 'new' keyword//
const person1 = new Person("Ashlee", 30);
const person2 = new Person("James", 25);

//print both of their information//
console.log("person 1:")
console.log(person1)

console.log("person 2:")
console.log(person2)

// Add one person 1's age by 3 years
person1.addAge(3);

//print person 1 new age after adding 3 years//
console.log("Updated age of Person 1:");
console.log(person1.age);

 
 //==========Exercise #3 ===========//

 function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      }
      else
      {
        reject("Small Number");
      }
    });
  }

const inputString = "ThisIsABigWord";
checkStringLength(inputString)
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
});

//==========Codewars #1 ===========//

 https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript/653071ef94f1d20b25f1830a 

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } 
  else 
  {
    return "Odd";
  }
};
console.log(evenOrOdd(4))
console.log(evenOrOdd(7))

//==========Codewars #1 ===========//
https://www.codewars.com/kata/5a05a4d206d5b61ba70000f9/train/javascript/653077ebc98819004b27ef5b

function penalty(aList) {
  // Convert the numbers to strings
  const strList = aList.map(String);

  // Sort the strings based on their combined values
  strList.sort((a, b) => (a + b) - (b + a));

  // Join the sorted strings to create the smallest penalty charge
  const result = strList.join('');

  return result;
}

// Example usages:
console.log(penalty([45, 30, 50, 1])); 
console.log(penalty([100, 10, 1])); 
console.log(penalty([32, 3]));