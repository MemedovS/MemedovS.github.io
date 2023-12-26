// lang= alert ('Вы готовы учиться')
// var num_1 = 10
// var num_2 = 8
// lang= alert("resault: " + (num_1 + num_2));
// console.log("resault: " + (num_1 + num_2));

// a = parseInt(prompt("vedite imya: "))
// b = parseInt(prompt("Enter b: "))
// alert("privet" +(a) );
//    let test = prompt ("kak")  
// let a = prompt("Как тебя зовут?");
// alert("Привет, " + a);


// let result = confirm("ВЫ уверенны");
// if (result) {
// alert("Вы нажали OK. Мы рады, что вы сделали выбор!");
// } else {
// alert("Вы нажали Отмена. Мы надеемся, что вы примете другое решение в будущем.");
// }

// let age = prompt('skolko');

    // switch (age) {
        // case '18':
            // alert('Вы совершеннолетний, все можно!');
            // break
        // case '10':
            // alert('Вам надо учить уроки!');
            // break
        // case '30':
            // alert('Ложитесь спать, завтра на работу');
            // break
        // default:
            // alert('Мы не знаем что Вам делать');
    // }
    // function showName () {
       
    function showName() {
        var userName = prompt("Пожалуйста, введите ваше имя:");
    
        if (userName) {
            alert("Привет, " + userName + "!");
        } else {
            alert("Вы не ввели имя.");
        }
    }

    window.onload = function() {
        showName();
    };
  