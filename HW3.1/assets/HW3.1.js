let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
result = +a.textContent + +b.textContent + +c.textContent + +d.textContent;

function summ() {
  document.getElementById("sum").textContent = "Итого: " + result;
}
summ();

let button = document.querySelector("#button");
function makeClick() {
  document.getElementById("sum").textContent =
    "Ура! Теперь цена: " + result * 0.8;
}

button.addEventListener("click", makeClick);
