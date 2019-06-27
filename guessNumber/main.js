let name = prompt('Привет! Как тебя зовут?');

if (name == '' || name == null) {
  alert('Привет, незнакомец (или очаровательная незнакомка)! Я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал".');
} else {
  alert('Привет, ' + name + '! Я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал".');
}

function firstGame() {

  let number = random(100);



  let min = 1;
  let max = 100;
  let many = 1;
  let guess = prompt('Какое число я загадал?');

  while (guess != number) {
    if (guess < number && guess >= min) {
      guess = prompt('Мало. Попробуй ещё раз');
    } else if (guess > number && guess <= max) {
      guess = prompt('Много. Попробуй ещё раз');
    } else if (guess == null || guess == '') {
      guess = prompt('Пожалуйста, напиши число от 1 до 100');
    } else if (guess < min || guess > max) {
      guess = prompt('Ну ты, конечно, молодец! Я ведь загадал число от 1 до 100 :D Попробуй ещё раз');
    } else if (guess = typeof "x") {
      guess = prompt('Пожалуйста, не ломай игру. Я уже один раз сломал...');
    }
    many++;
  }

  if (many == 1 || many == 21 || many == 31 || many == 41 || many == 51 || many == 61 || many == 71 || many == 81 || many == 91 || many == 101 || many == 111 || many == 121 || many == 131 || many == 141 || many == 151) {
    alert('Угадал! Тебе понадобилась ' + many + ' попытка');
  } else if (many == 2 || many == 3 || many == 4 || many == 22 || many == 23 || many == 24 || many == 32 || many == 33 || many == 34 || many == 42 || many == 43 || many == 44 || many == 52 || many == 53 || many == 54 || many == 62 || many == 63 || many == 64 || many == 72 || many == 73 || many == 74 || many == 82 || many == 83 || many == 84 || many == 92 || many == 93 || many == 94 || many == 102 || many == 103 || many == 104 || many == 122 || many == 123 || many == 124 || many == 132 || many == 133 || many == 134 || many == 142 || many == 143 || many == 144 || many == 152) {
    alert('Угадал! Тебе понадобилось ' + many + ' попытки');
  } else {
    alert('Угадал! Тебе понадобилось ' + many + ' попыток');
  }

  alert('Спасибо за игру! Приятно провели с тобой время! :D');
}
 
let number = firstGame();





