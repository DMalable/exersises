// #1 Фильтрация строки
//Создать переменную со строковым значением. 
//Сформировать переменную которая будет состоять только из 
//ГЛАСНЫХ букв этой строки. Результат вывести в консоль.
console.log('Задание 1:');

const string = "Привет! Как дела?";
function getVowels(str) {
  const exp = /[^аеёиоуыэюя]/ig;
  let result = str.replace(exp, '');
  return result;
}

console.log(getVowels(string));


//  #2 Выборка объекта
// Сформировать произвольный массив объектов, описывающий, например, 
// работников компании, в каждом объекте должны содержаться сл. 
// свойства (поля) - name (содержащее имя сотрудника) и поле 
// salary (содержащее зарплату сотрудника от 0 до 3000). 
// Сформировать функцию в которую будет передан в качестве аргумента 
// этот массив и возвращен из функции массив содержащий имена всех 
// сотрудников, чья зарплата превышает 1000.
console.log('Задание 2:');

const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

function getWorthyWorkers(arr) {

  return arr.filter(item => item.salary > 1000).map(elm => elm.name);
  
  // let result;
  // console.log(workers[0].name);
  // let result =[];
  // for (let i of arr) {
  //       if(i.salary > 1000) {
  //         result.push(i.name);
  //     }
  //   }

 	// workers.forEach(function(item) {
	// 	if(item.salary > 1000) {
	// 		result.push(item.name);
	// 	}
	// }); 

  //return result;
}

console.log(getWorthyWorkers(workers));


// #3 Анализ строки
// Написать функцию которая будет принимать в качестве аргумента 
// строку имитирующую адрес до файла. Функция должна возвращать 
// true или false в зависимости от того есть у этого файла 
// расширение html или нет.
console.log('Задание 3:');
      
const path = '/users/download/index.html';

function isHtml(str) {
  const extention = 'html';
  return str.endsWith(`.${extention}`); 
}

console.log(isHtml(path));


// #1 Фильтрация массива
// Создайте функцию которая в качестве аргумента принимает целое число, 
// и проверяет четное оно или нет. Затем создайте произвольный массив 
// целых чисел. И используя функцию проверки числа на четность, 
// создайте из готового массива новый, который будет содержать только 
// четные числа. Результат выведите в консоль.
console.log('Задание 4:');
      
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => num % 2 == 0;

filterArray = (arr, func) => arr.filter(func);

// function filterArray(arr, func) {
//   return arr.filter(func);
// }

//   // let outArr = [];
//  // for (i of arr) {
//  //   if (func(i)){
//  //     outArr.push(i);
//  //   }
//  // }
// }

console.log(filterArray(mixedArray, isEven));
