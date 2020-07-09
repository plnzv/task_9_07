"use strict"

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {};
appData.money = money;
appData.timeData = time;
let Expen = prompt("Введите обязательную статью расходов в этом месяце");
let optExpensens = prompt("Во сколько обойдется?")  ;
let Expensens = {};
Expensens.Expensens = Expen.split(", ");
Expensens.optionalExpenses = optExpensens.split(", ");
appData.Expensens = Expensens.Expensens;
appData.optionalExpenses = Expensens.optionalExpenses;
console.log(appData);