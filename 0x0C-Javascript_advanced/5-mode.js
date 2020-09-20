const changeMode = (size, weight, transform, background, color) => {
  document.body.style.fontSize = `${size.toString()} px`;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
};

const main = () => {
  const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = () =>
    changeMode(12, "normal", "lowercase", "white", "black");

  document.getElementById("spooky").addEventListener("click", () => spooky());
  document.getElementById("dark").addEventListener("click", () => darkMode());
  document
    .getElementById("scream")
    .addEventListener("click", () => screamMode());
};

main();
