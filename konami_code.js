const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here

  // console.log("what is this?")
}

let index = 0

const input = document.querySelector('input');
const body = document.querySelector('input');
function cheatCode(e){
  const key = e.key
  console.log(key, index)
  if (key === codes[index]) {
    index++
    if (index === codes.length){
      alert("flawless victory");
      index = 0
    }

  } else {
    index = 0
  }

}

input.addEventListener('keydown', cheatCode)

body.addEventListener('keydown', cheatCode)
