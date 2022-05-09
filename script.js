const adviceIdSpan = document.getElementById("advice-id");
const adviceDiv = document.getElementById("advice");
const btn = document.getElementById("btn");

renderAdvice();
btn.addEventListener("click", renderAdvice);

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
}

async function renderAdvice() {
  const newAdvice = await getAdvice();

  adviceIdSpan.innerHTML = newAdvice.slip.id;
  adviceDiv.innerHTML = `&ldquo;${newAdvice.slip.advice}&rdquo;`;
}
