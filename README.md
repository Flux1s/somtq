# somtq
// Функция принимает значение (строку) и ищет и убирает запрещённые символы (',') 
// и возвращает строку уже без них.
// const char = (text) => {
//     text = 'Something, forbidden for something. Yeah, yeah something, yeah.'
//     text = text.split('');
//     const newTxt = [];
//     text.forEach(element => {
//         if (element !== ',') {
//             newTxt.push(element)
//         }
//     });
//     return newTxt.join('');
// }
// console.log(char());
// поищи что такое регулярки для js
// ctrl + / - хот ки чтоб закомментировать часть кода и откомментировать.
// let array = [true, true, false, true, false, false, true];
// let count = 0;
// array.forEach(element => {
//     if (element == true) {
//         count++
//     }
// });
// console.log(count);

// Даны массивы 
// нужно сделать из них один
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = [7, 8, 9]

// const newArray = (...arr) => { // ... - оператор троеточие можно использовать для неопределённого числа значений
//     return [...arr].flat() // метод .flat() вытаскивает массив из массива
// }
// console.log(newArray(arr1, arr2, arr3));

// Кринж сам смотри че здесь накукареканнауцшш
// const capitalize = (str, charIndex) => {
//     if (charIndex < 0 || charIndex > str.length) {
//       return str;
//     }
//     return (
//       str.slice(0, charIndex)
//     + str.charAt(charIndex).toUpperCase()
//     + str.slice(charIndex + 1)
//     );
//   };
// console.log(capitalize('calm', 2));

// const numberTwoAndUmmAhhSixDietCoke = (order) => {
//     if (order === 'mcflurry') {
//         return 'Hell nahh machine is not working'
//     } else if (order == 'fog') {
//         return 'fog is coming, fog is coming'
//     } else {
//         return 'oki epic girl i love your energy and shit'
//     }
// }
// console.log(numberTwoAndUmmAhhSixDietCoke('fog'));

// let str = '';

// for  (let i = 0; i < 9; i++) {
//     str += i;
// }
// console.log(str);

// const countCapitalLetters = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i += 1) {
//       if (str[i] === str[i].toUpperCase() && str[i] !== ' ') {
//         count += 1;
//       }
//     }
//     return count;
//   };


// ssh -T git@github.com
// ssh-keygen -t rsa -b 4096
// cat .ssh/id_rsa.pub || cat ./.ssh/id_rsa.pub
// npm ci -установка плагинов (в терминале вс)
// npm test - проверка тестирование нашего задания
// npm lint -покажет где ошибки
// npm lint-fix -уберёт ошибки
// make instal 

git config --global user.name "Mona Lisa"
