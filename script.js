const color_space   = docment.getElementID('color-space')
const color_code    = docment.getElementID('color-code')
const canswer       = docment.getElementID('canswer')
const canswer_code  = docment.getElementID('canswer-code')
const canswer_color = docment.getElementID('canswer-color')
const answer        = docment.getElementID('answer')
const answer_code   = docment.getElementID('answer-code')
const answer_color  = docment.getElementID('answer-color')
const err           = docment.getElementID('err')
const point         = docment.getElementID('point')

generate()

function generate() {
  let rgb10 = []
  let rgb16 = []
  for(let i=0; i<3; i++){
    rgb10[i] = Math.floor(Math.random() * 256)
    rgb16[i] = rgb10.toString(16)
  }
  color_space.style.backgroundColor = ‘#${rgb16.join('')}’
}

function check() {
  
}
