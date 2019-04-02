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
  console.log("reached init");
  // your code here
  let index = 0;

  document.addEventListener("keydown", function(e) {
    const key = event.key;
    console.log("key pressed " + key);
    if (codes[index] === key) {
      index++;
      if (index === codes.length) {
        alert("Hurray!");
      }
    } else {
      index = 0;
    }
  });
}

init();
