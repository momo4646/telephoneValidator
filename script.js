const clearBtn = document.querySelector("#clear-btn");
const result = document.querySelector("#results-div");


const regexBasic = /^1?\s?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/
const regexParanthesis = /^1?\s?\(([0-9]{3})\)[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/

const phoneRegexArray = [regexBasic, regexParanthesis]

const clear = () => {
  result.innerText = "";
}

function validatePhone() {
  const userString = document.querySelector("#user-input").value;
  if (userString === "") {
    alert("Please provide a phone number");
    return;
  }
  if (phoneRegexArray.some(regex => regex.test(userString))) {
    result.innerText = `Valid US number: ${userString}`
  } else {
    result.innerText = `Invalid US number: ${userString}`
  }
}

clearBtn.addEventListener("click", clear);


