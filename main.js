//1

const age = +prompt('Сколько вам лет?');
if(age<=2){
  alert('ребенок');
}
else if(age>=12&&age<=18){
  alert('подросток');
}
else if(age>18&&age<=60){
  alert('взрослый');
}
else if(age>60){
  alert('пенсионер');
}

// 2

//  const digit = +prompt('Введите число от 0-9:');
//  switch(digit){
//    case 0:
//     alert('\u0029');
//     break;
//     case 1:
//     alert('!');
//     break;
//     case 2:
//     alert('@');
//     break;
//     case 3:
//     alert('#');
//     break;
//     case 4:
//     alert('$');
//     break;
//     case 5:
//     alert('%');
//     break;
//     case 6:
//     alert('^');
//     break;
//     case 7:
//     alert('&');
//     break;
//     case 8:
//     alert('*');
//     break;
//     case 9:
//     alert('\u0028');
//     break;
//     default:
//       alert('Error');
//  }

//3

// const number = +prompt('Введите 3х значное число');
// const number1 = number % 10;
// // console.log ( number1);
// const step1 =Math.trunc(number/10);
// const number2 = step1 % 10;
// // console.log ( number2);
// const step2 =Math.trunc(number/100);
// const number3 = step2 % 10;
// // console.log ( number3);
// if(number1==number2 || number1==number3 || number2==number3){
//   alert('Есть одинаковые числа');
// } else{ 
//   alert('Нет одинаковых чисел');
// }



//4

// const year = +prompt('Введите год:');
// if((year%400==0||year%4==0)&&(year%100!==0)){
//   alert('Это высокосный год.');
//   } else {alert('Это не высокосный год.');}

//5

// const a = +prompt('Введите 5 разрядное число');
// const b = a % 100;
// const c = Math.trunc(a / 1000);
// const e = b % 10;
// const f = Math.trunc(b / 10);
// const d = +`${e}${f}`;
//  if(d==c){
//    alert('palindrom');
//  } else {
//    alert('no palindrom');
//  }

//6

// const currency = +prompt('Введите USD');
// const currencyConvertor =+prompt('В какую валюту перевести:\n 1-EUR;\n 2-UAN;\n 3-AZN.');
// switch(currencyConvertor){
//       case 1:       
//       alert(currency*0.9083);
//       break;
//       case 2:
//       alert(currency*7.03);
//       break;
//       case 3:
//       alert(currency*1.7);
//       break;
//     }

//7

// const sum = +prompt('Введите сумму покупки:');
// if(200<=sum<=300){
// alert(`Сумма к оплате ${sum-(sum*0.03)}грн`);
// } else if(300<sum<=500) {
//   alert(`Сумма к оплате ${sum-(sum*0.05)}грн`);
// } else if(sum>500) {
//   alert(`Сумма к оплате ${sum-(sum*0.07)}грн`);
// }

//8

// const lang = +prompt('Введите длину окружности');
// const perimetr = +prompt('Введите периметр квадрата');
// const diametr = (lang/Math.PI).toFixed(2);//15.7
// const a = perimetr / 4;//20
//  if(diametr == a){
//    alert('Такая окружность поместиться в указанный квадрат.');
//  } 
//  else alert('Такая окружность не поместиться в указанный квадрат.');

//9

// const question1 = +prompt(' Выберите 1 правильный ответ!\n Сколько будет :2+2 ?\n1.\u0029 4; \n2.\u0029 5; \n3.\u0029 6;');
// const question2 = +prompt('Сколько будет :2+3 ?\n1.\u0029 4; \n2.\u0029 5; \n3.\u0029 6;');
// const question3 = +prompt('Сколько будет :2+5 ?\n1.\u0029 7; \n2.\u0029 5; \n3.\u0029 6;');
// let result= 0;
// if(question1==1){
// result+=2;
// } 
// if (question2==2){
//   result+=2;
// }
// if(question3==1){
//   result+=2;
// }
// alert(`Вы набрали : ${result} баллов.`);


//10

// //1 3 5 7 8 10 12 -31
// //4 6 9 11 -30
// //2-28

// let day = +prompt('Enter day');
// let month = +prompt('Enter month');
// let year = +prompt('Enter year');
// if(day > 31 && (month==1||month==3||month==5||month==7||month==8||month==10||month==12)){
//  console.error("Неверно введена дата!!!"); 
//  }
//  if(month==2 && day >= 29 && year % 100 !==0 && year % 400 !== 0 && year % 4 !== 0){
//   console.error("Неверно введена дата!!!"); 
// } 
// if(month==2 && day>=30 && ((year % 400 == 0 || year % 4 == 0) && year % 100 !== 0)){
//   console.error("Неверно введена дата!!!"); 
// } 
// if(day > 30 && (month==4||month==6||month==9||month==11)){
//   console.error("Неверно введена дата!!!");
// }
// if(month > 12){
//   console.error("Неверно введена дата!!!");
// }
// if(day==31  && (month==1||month==3||month==5||month==7||month==8||month==10||month==12)){
//   month++;
//   day=0; 
// }else if (day < 31 && (month==1||month==3||month==5||month==7||month==8||month==10||month==12)){
//   day++;
// } 
// if(day== 30 && (month==4||month==6||month==9||month==11)){
//   day=1;
//   month++;
// } else if(day < 30 && (month==4||month==6||month==9||month==11)){
//   day++
// } 
// if(month==2 && day==29 && (year % 400 == 0 || year % 4 == 0) && year % 100 !==0){
//   month++;
//   day=1;
// } 
// if(month==2 && day <= 29 && (year % 400 == 0 || year % 4 == 0) && year % 100 !==0){
//   day++;
// } 
// if(month==2 && day==28 && (year % 400 !== 0 || year % 4 !==0)){
//   month++;
//   day=1;
// } 
// if(month==2 && day <= 28 && (year % 400 !==0 || year % 4 !==0)){
//   day++;
// } 
// if(month > 12){
//   month=1;
//   year++;
//   day=1;
// }
// console.log(day);
// console.log(month);
// console.log(year);

