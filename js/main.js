                      //Lesson 2 task 3
//Задача. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:
/*
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);


var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;
alert(num);
*/

                // lesson 3 task 1
//Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
/*
let arr = ['Привет, ' , 'мир', '!' ];
console.log(arr[0]+arr[1]+arr[2]);
*/

                // lesson 3 task 2
//Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.
/*
let arr = ['Привет, ' , 'мир', '!' ];
let text = arr[0]+arr[1]+arr[2];
alert(text);
*/
               // lesson 3 task 3
//Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').
/*
let arr = ['Привет, ' , 'мир', '!' ];
arr[0]='Пока, ';
let text = arr[0]+arr[1]+arr[2];
alert(text);
*/
              // leson 3 task 4
//Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.
/*
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'}; // "ключ" : "значение",
alert(obj['Петя']);
alert(obj['Коля']);
*/
                    
              //  lesson 3 task 6
//Дан многомерный массив arr. Выведите с его помощью слово 'голубой'.
              /*
var arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};
alert(arr['ru'][0]);
*/

               // lesson 4 task 1
//Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
               /*
let a = 10;
if(a==10) {
  alert('Верно');
} else {
  alert('Неверно')
}
*/
                //lesson 4 task 2
//В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
/*
let min = 63;
if (min > 0 && min<15 ) {
  alert(1);
} else if(min > 15 && min < 30) {
  alert(2);
} else if (min > 30 && min < 45){ 
  alert(3);
} else if (min > 45 && min < 60){ 
  alert(4);
} else {
  alert('мимо');
}
*/
              // lesson 5 task 1
//Выведите столбец чисел от 1 до 50.
/*let t = 50;
for (let i=0; i<=t; i++){
  console.log(i);
}*/
/*
let i=1;
while(i<=50) {
  document.write(i+'<br>');
  i++;
}
*/
              //  lesson 5 task 2
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
/*let arr = [1,2,3,4,5];
for (let i=0; i<arr.length; i++){
  document.write(arr[i]+'<br>');
}
*/
              //  lesson 5 task 3
//Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.              
              /*
let arr = [2,3,4,5];
let t=1;
for (let i=0; i<arr.length; i++) {
  t*=arr[i];
}
alert(t);
*/

                // lesson 5 task 4
//Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
                /*
let obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};
for (let key in obj) {
  alert( key + ' это ' + obj[key] );
}
*/
              //lesson 5 task 5
              /*
let a = 36;
let b = 19;
result = a%b;
if(result != 0) {
  alert ('делится с остатком ' + result);
} else {
  alert('делится без остатка, результат деления ' + (a/b) );
}
*/

                //lesson 7 task 1
//Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
/*
let str = 'aaa@bbb@ccc';
alert(str.replace(/@/g, '!')); //получим 'aaa!bbb!ccc'
*/

                //lesson 7 task 2
//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
                /*
let str = 'aaa bbb ccc';
alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)
*/
                //lesson 7 task 3
//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
                /*
let str = '2025-12-31';
let t=str.replace(/-/g, '/');
alert(t);
*/

/*
let str = '2025-12-31';
let arr =str.split('-');
let newstr = arr[0]+'/'+arr[1]+'/'+arr[2];
alert(newstr);
*/
                  //lesson 8 task 1
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
                  /*
let a = [1,2,3];
let b =['a','b','c'];
let c=a.concat(b);
alert(c);
*/
                  //lesson 8 task 2
//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
/*
let a =['a','b','c'];
a.push(1,2,3);
alert(a);
*/
                  //lesson 9 task 1
//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл.
                  /*
let str = 'xiaomi';
str = str[0].toUpperCase()+str.substr(1);
alert(str);
*/

                  //lesson 9 task 3
//Проверьте, что строка начинается на http://.
/*let str ="http://www.ya.ru";
if(str.substr(0,7)=='http://') {
  alert('yes');
} else {
  alert('no');
}
*/
                  //lesson 9 task 4
//Проверьте, что строка заканчивается на .html
/*let str = "index.html";
if(str.substr(-5)=='.html') {
  alert('yes');
} else {
  alert('no');
}
*/
                  //lesson 10 task 1
//Сделайте функцию, которая возвращает куб числа. Число передается параметром.
                  /*
function cube(n) {
  return n*n*n;
}
alert(cube(3));
*/
                  //lesson 12 task 1
//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
                  /*
                  //неверное решение
function number(a,b) {
  if (a===b) {
    return 'верно';
  } else {
   return 'неверно';
  }
}
alert(number(3,33));
*/
/*
function number(a,b) {
  return a===b;
}
alert(number(3,3));
*/

                //lesson 12 task 2
//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
/*function sum(a,b) {
  return a+b > 10
}
alert(sum(5,2));
*/

                //lesson 12 task 3
//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
                /*
function minus(a) {
  return (a<0);
}
alert(minus('-5'));
*/
                //lesson 13 task 2
//С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
/*let a = 9;
let str ='';
for (let i=a; i>0; i--) {
  str+=String(i);
  
}
alert(str);
*/

                //lesson 13 task 3
//С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
                /*
let str ='-';
for (let i=1; i<10; i++) {
  str += String(i+'-');
}
alert(str);
*/
                //lesson 13 task 4
//Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
                /*
let str='';
for (let i=0; i<21; i++){
  str +='x'; 
  document.write(str+'<br>');
}
*/

                //lesson 13 task 5
//С помощью двух вложенных циклов нарисуйте следующую пирамидку:
                /*
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    document.write(i);
  }
  document.write('</br>');
}
*/

                //lesson 14 task 2
//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
                /*
let arr =[];
let str;
for (let i=1; i<10;i++){
  str='';
  for (let j=0; j<i;j++) {
    str += String(i);
  }
  arr.push(str);
}
alert(arr);
*/

                //lesson 15 task 1
//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
                /*
function isNumberingRange(n) {
  return n>0 && n<10;
}
alert(isNumberingRange(5));
*/
                  //lesson 15 task 2
//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
                  /*
let arr = [1, 2, 3, -1, -2, -3, 12, -11];

function isNumberingRange (n) {
  if(n>0&&n<10) {
    return true;
  } else {
    return false;
  }
}
let arr2=[];
for (let i=0; i<arr.length; i++) {
  if(isNumberingRange(arr[i])) {
    arr2.push(arr[i]);
  }
}
alert(arr2);
*/
                  //lesson 17 task 1
//Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
/*function func(arr) {
	alert(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}
alert(func([1,2,3,4,5]));
*/

                    //lesson 18 task 3
//Выведите с помощью цикла столбец четных чисел от 1 до 100.
/*for (let i=2; i<=100; i=i+2){
  document.write(i+'<br>');
}*/

                    //lesson 18 task 12
//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). 
                    /*
function arrayAvrg(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += Number(arr[i]);
}
return sum / arr.length;
}
alert(arrayAvrg([3,2,1]));
*/