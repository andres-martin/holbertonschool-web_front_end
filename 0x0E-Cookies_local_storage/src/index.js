const setCookies = () => {
  const firstName = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  document.cookie = `firstname=${firstName}`;
  document.cookie = `email=${email}`;
};

const showCookies = () => {
  const newElement = document.createElement("p");
  newElement.innerText = `Cookies: ${cookiesValues()}`;

  document.body.appendChild(newElement);
};

const cookiesValues = () => {
  const cookies = document.cookie.split(";");
  const cookiesValues = [];

  cookies.forEach((item, _idx) => cookiesValues.push(item.split("=")[1]));

  return cookiesValues;
};
