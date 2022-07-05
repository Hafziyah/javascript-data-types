let firstQuestion = prompt ("Do you know what JavaScript data types are? True or False");
let followUp =prompt ("Are they Booleans, Strings, Numbers, Null and Undefined?");
let answer = prompt ("There are 5 types of basic or primitive data types ie Booleans (True/False), Numbers (-1, 0, 1, 1.50), Strings ('Loaves', 'Peter Pan', 'etc'), Null and undefined");

alert (firstQuestion)

if (firstQuestion ==="True") {
    alert ("Good!")
} else if (followUp ==="Yes") {
    alert("Great") 
} else {
    alert (`${answer}, you need to learn more about data types because those are the JavaScript data types.`);
};