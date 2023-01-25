//1
/*let name = prompt('Введите ваше имя');
let age = prompt('Сколько вам лет?');
let city = prompt('В каком городе вы проживаете?');
let company = prompt('Ваше место работы?');
let phone = prompt('Ваш номер телефона?');
let email = prompt('Ваша электронная почта?');
console.log("Меня зовут " + name +"."+ " Мне " + age + " лет."+ " Я проживаю в " + city + " и работаю в " + company + ". Мои контактные данные " + phone + "," + email);*/

//2 
/*let name = prompt('Введите ваше имя');
let age = prompt('Введите ваш возраст');
let year = 1996;
if (age === 26) {
    console.log(name + " родилась в " + year + " году.");
}*/

//3
/*let str = "123456";
if ((+str[0] + +str[1] + +str[2]) === (+str[3] + +str[4] + +str[5])) {
    console.log('да');
} else {
    console.log('нет');
}*/


//4
/*let a = +prompt('Введите число!');
if (a > 0) {
    console.log('Верно!');
} else {
    console.log('Неверно!')
}*/

//5
/*let a = 10;
let b = 2;
let c = Math.pow((a+b),2);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
if ((a+b) > 1) {
} console.log(c);*/

//6
/*let a = 10;
let b = 2;
if (a > 2 && a < 10 || b >=6 && b < 14) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}*/
//+prompt('Введите число от 0 до 59')
//7
/*const n = +prompt('Введите число от 0 до 59');
switch (true) {
    case 0 <= n && n < 15:
        console.log('1я четверть');
        break;
    case n >= 15 && n < 30:
        console.log('2я четверть');
        break;
    case n >= 30 && n < 45:
        console.log('3я четверть');
        break;
    case n >= 45 && n <= 59:
        console.log('4я четверть');
        break;
}*/

//8
/*let day = +prompt('Введите день месяца');
if (day <= 10) {
    console.log('1я');
} else if (day <= 20){
    console.log('2я');
} else {
    console.log('3я');
}*/

//9
/*let days = +prompt('Введите количество дней');
let year = 365;
let month =  31;
let week = 7;
let hour = 60;
let minute = 60;
let second = 60;

if ( 0 < days <= 365) {
    console.log(days / year + " года");
} else {
    console.log(year / days + " года")
}
if (days <= 31) {
    console.log(month/days + " Месяца");
} else if (days > 31) {
    console.log(days/month + " Месяца");
}

if (days <= 7) {
    console.log(week/days + " недели");
} else {
    console.log(days/week + " недели");
}

if (days === 1) {
    console.log("12 часов");
} else {
    console.log (12*days + ' часа');
}


    console.log (days*12*60 + ' минут');
    
    console.log (days*12*60*60 + ' секунд');*/

//10


const p = +prompt('Введите день');
switch (true) {
    case 0 < p && p <= 31:
        console.log('1 месяц, зима');
        break;
    case p > 31 && p <= 59:
        console.log('2 месяц, зима');
        break;
    case p > 59 && p <=90:
        console.log('3 месяц, весна');
        break;
    case p > 90 && p <= 120:
        console.log('4 месяц, весна');
        break;
    case p > 120 && p <= 151:
        console.log('5 месяц, весна');
        break;
    case p > 151 && p <= 181:
        console.log('6 месяц, лето');
        break;
    case p > 181 && p <= 211:
        console.log('7 месяц, лето');
        break;
        case p > 211 && p <= 242:
            console.log('8 месяц, лето');
            break;
            case p > 242 && p <= 272:
                console.log('9 месяц, осень');
                break;
                case p > 272 && p <= 303:
                    console.log('10 месяц, осень');
                    break;
                    case p > 303 && p <= 333:
                        console.log('11 месяц, осень');
                        break;     
                        case p > 333 && p <= 364:
                            console.log('12 месяц, зима');
                            break;   
    }

