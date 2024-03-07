//create an array
let fruits = ['apple','banana','orange','mango'];
console.log(fruits);

//accessing elements
console.log('First fruit:', fruits[0]);
console.log('Third fruit:', fruits[2]);
console.log('Last fruit: ', fruits[fruits.length - 1]);

//modifying arrays
fruits[1]='grapes';
console.log(fruits);
fruits.push('strawberry');
console.log(fruits);
fruits.pop();
console.log(fruits);


//iteration
let vegetables = ['cabbage', 'carrot', 'cucumber', 'tomato'];

for (let i = 0; i < vegetables.length; i++){
    console.log("Vegetable: ", vegetables[i])
}

let colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach(function (color){
    console.log('Color: ', color);
});//forEach can only accept function

//common array methods
//length
console.log('array length;', colors.length);

//indexOf
console.log('index of gree:', colors.indexOf('green'));

//includes
console.log('includes yellow:', colors,includes('yellow'));

//join
console.log('joined array:', colors.join('-'));

//slice
let slicedArray = colors.slice(1,3);
console.log('sliced array', slicedArray);
console.log("colors array", colors);

//splice
let removedElements=colors.splice(1,2);
console.log("Spliced Array: ", removedElements);
console.log("New Colors array: ", colors);