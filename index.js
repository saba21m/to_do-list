// let fruitchaat= [ "banana"," apple","orange"];
// // push
// fruitchaat.push("melon");
// //pop
// fruitchaat.pop();
// //concat
// fruitchaat =fruitchaat.concat(["melon","kiwi"]);
// console.log(fruitchaat);
// loops
//    while loop
// let i =0;
// while(i <=10
//      ){
//     console.log(i);
//     i++
// }
//to do's
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition)
    ;
{
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to do in your todos?",
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "do you want to add more",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    console.log(todos);
}
