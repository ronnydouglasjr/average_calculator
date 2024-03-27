const form = document.querySelector("form");

const imgApproved = '<img src="img/aprovado.png"/>';
const imgDisapproved = '<img src="img/reprovado.png"/>';

let lines = "";

const arrayNames = [];
const arrayValue = [];

function toCorrect(note) {
  if (note >= 7) {
    return imgApproved;
  } else {
    return imgDisapproved;
  }
}

function addLines() {
  const name = document.querySelector("#name");
  const note = document.querySelector("#note");

  if (arrayNames.includes(name.value)) {
    alert(`A atividade ${name.value} Já foi inserida`);
  } else {
    arrayNames.push(name.value);
    arrayValue.push(Number(note.value));

    let line = "<tr>";
    line += "<td>" + name.value + "</td>";
    line += "<td>" + note.value + "</td>";
    line += "<td>" + toCorrect(note.value) + "</td>";
    line += "</tr>";

    lines += line;
  }
  name.value = "";
  note.value = "";
}

function updateTable() {
  const message = document.querySelector("tbody");
  message.innerHTML = lines;
}

function finalMedia() {
  let sum = 0;
  for (let i = 0; i < arrayValue.length; i++) {
    sum += arrayValue[i];
  }
  return sum / arrayValue.length;
}

function updateMedia() {
  const average = finalMedia();

  document.querySelector("#final-grade").innerHTML = average.toFixed(2);
  const result = document.querySelector("#result");
  console.log(result);
  if (average >= 7) {
    result.style.backgroundColor = "#009432";
    result.style.color = "white"
    result.innerHTML = "Aprovado";
  } else {
    result.style.backgroundColor = "red";
    result.style.color = "white"
    result.innerHTML = "Reprovado";

  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addLines();
  updateTable();
  finalMedia();
  updateMedia();
});
