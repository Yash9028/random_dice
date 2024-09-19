const imgEl = document.querySelector("img");
console.log(imgEl);
const btnEl = document.querySelector("button");
console.log(btnEl);

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function getrandomURL() {
  const numWords = ["one", "two", "three", "four", "five", "six"];

  const rn = getRandom() - 1;
  console.log(numWords[rn]);

  const url = `assets/dice-${numWords[rn]}.png`;
  return url;
}
getrandomURL();
imgEl.src = getrandomURL();

btnEl.addEventListener("click",function(){
    console.log("HI");
    imgEl.src = getrandomURL();
});
