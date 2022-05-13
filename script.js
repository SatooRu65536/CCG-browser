const color_space = document.getElementById('color-space');
const color_code = document.getElementById('color-code');
const canswer = document.getElementById('canswer');
const canswer_code = document.getElementById('canswer-code');
const canswer_color = document.getElementById('canswer-color');
const answer = document.getElementById('answer');
const answer_code = document.getElementById('answer-code');
const answer_color = document.getElementById('answer-color');

const res_err = document.getElementById('res-err');
const res_r = document.getElementById('res-r');
const res_g = document.getElementById('res-g');
const res_b = document.getElementById('res-b');

generate()

function generate() {
  rgb10 = []
  rgb16 = []
  for (let i = 0; i < 3; i++) {
    rgb10[i] = Math.floor(Math.random() * 256);
    rgb16[i] = rgb10[i].toString(16);
  }
  color_space.style.backgroundColor = `#${rgb16.join('')}`;
}

function check() {
  input_value = color_code.value.toLowerCase();
  console.log(input_value);

  let input_rgb10 = []
  let input_rgb16 = []
  let point = 0;

  for (let i = 0; i < 3; i++) {
    input_rgb10[i] = parseInt(input_value.substring(2 * i + 1, 2 * i + 3), 16);
    input_rgb16[i] = parseInt(input_rgb10[i], 16);
    point += Math.abs(input_rgb10[i] - rgb10[i])
  }

  if (isNaN(point)) {
    res_err.innerText = '入力が間違っています';
    res_r.innerText = '';
    res_g.innerText = '';
    res_b.innerText = '';
  } else {
    res_err.innerText = point;
    res_r.innerText = rgb10[0] - input_rgb10[0];
    res_g.innerText = rgb10[1] - input_rgb10[1];
    res_b.innerText = rgb10[2] - input_rgb10[2];
  }
}
