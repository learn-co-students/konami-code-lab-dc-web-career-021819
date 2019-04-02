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
  const body = document.body

  let codesCorrect = 0;

  function onKeyDownHandler(event){
    const key = event.key
    if (key === codes[codesCorrect]){
      if(codesCorrect === (codes.length - 1)){
        alert("Congrats!");
        codesCorrect = 0;
      }
      else{
        codesCorrect++;
      }
    }
    else {
      codesCorrect = 0;
    }
  }
  body.addEventListener('keydown', onKeyDownHandler, false);

}
