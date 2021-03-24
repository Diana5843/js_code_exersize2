//  Задача 1
 
 const userInput = +prompt ("Ведите ваше число месяца, для определения декады: \n");
    let day = userInput;

switch(true){
    case (day <= 10):{
        alert("Первая декада");
        break;
    }
    case (day >= 11 && day <= 20):{
        alert(" Вторая декада");
        break;
    }
    case (day >= 21 && day <= 31):{
        alert(" Третья декада");
        break;
    }
    default:{
        throw new Error('Error');
    }

}

// if (day <= 10 ) {
// let decade = 1;
// }
// if (day >= 11 && day <=20) 
// decade = 2;
// }
// if (day >= 21 && day <=31) {
// decade = 3;
// }
// alert(decade);

// Задача 2

const num1 = +prompt (" Введите 1 число: \n");
const num2 = +prompt ("Введите 2 число: \n");

const calculator = +prompt("Выберете действие, которое хотите провести с числами: \n 1 - multiply, \n 2 - division, \n 3 - addition, \n 4 - subtraction");

switch(calculator){
    case 1:{
        alert("Произведение 1 и 2 числа =" + (num1 * num2).toString());
        break;
    }
    case 2:{
        alert("Деление 1 и 2 числа =" + (num1 / num2).toString());
        break;
    }
    case  3:{
        alert("Сложение 1 и 2 числа =" + (num1 + num2).toString());
        break;
    }
    case 4:{
        alert("Вычитание 1 и 2 числа =" + (num1 - num2).toString());
        break;
    }
    default:{
        alert("Ошибка. Введите числа от 1 до 4.")
    }
}
