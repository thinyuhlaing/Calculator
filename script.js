const displayTag = document.getElementsByClassName("display")[0];
const numbersTag = document.getElementsByClassName("number");

const cButton = document.getElementById("C");
const plusormius = document.getElementById("+/-");
const parcent = document.getElementById("%");
const divideButton = document.getElementById("/");
const multiplyButton = document.getElementById("*");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");
const minusButton = document.getElementById("-");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const plusButton = document.getElementById("+");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const dotButton = document.getElementById(".");
const zeroButton = document.getElementById("zero");
const equalButton = document.getElementById("=");

displayTag.addEventListener("input", () => {
  updateButton();
});

const updateButton = () => {
  if (displayTag.value.length >= 0) {
    cButton.innerHTML = "C";
  } else {
    cButton.innerHTML = "AC";
  }
};

oneButton.addEventListener("click", (event) => {
  event = 1;
  appendToDisplay(event);
});

twoButton.addEventListener("click", (event) => {
  event = 2;
  appendToDisplay(event);
});

threeButton.addEventListener("click", (event) => {
  event = 3;
  appendToDisplay(event);
});

fourButton.addEventListener("click", (event) => {
  event = 4;
  appendToDisplay(event);
});

fiveButton.addEventListener("click", (event) => {
  event = 5;
  appendToDisplay(event);
});

sixButton.addEventListener("click", (event) => {
  event = 6;
  appendToDisplay(event);
});

sevenButton.addEventListener("click", (event) => {
  event = 7;
  appendToDisplay(event);
});

eightButton.addEventListener("click", (event) => {
  event = 8;
  appendToDisplay(event);
});

nineButton.addEventListener("click", (event) => {
  event = 9;
  appendToDisplay(event);
});

zeroButton.addEventListener("click", (event) => {
  event = 0;
  appendToDisplay(event);
});

plusButton.addEventListener("click", (event) => {
  event = "+";
  appendToDisplay(event);
});

equalButton.addEventListener("click", () => {
  calculate();
});

dotButton.addEventListener("click", (event) => {
  event = ".";
  appendToDisplay(event);
});

minusButton.addEventListener("click", (event) => {
  event = "-";
  appendToDisplay(event);
});

multiplyButton.addEventListener("click", (event) => {
  event = "*";
  appendToDisplay(event);
});

parcent.addEventListener("click", (event) => {
  event = "/100";
  appendToDisplay(event);
  calculate();
});

divideButton.addEventListener("click", (event) => {
  event = "/";
  appendToDisplay(event);
});

plusormius.addEventListener("click", () => {
  if (displayTag.value.length === 0) {
    return;
  } else {
    displayTag.value = "-" + displayTag.value;
  }
});

cButton.addEventListener("click", () => {
  clearDisplay();
  cButton.innerHTML = "AC";
});

const appendToDisplay = (value) => {
  displayTag.value += value;
  updateButton();
};

const clearDisplay = () => {
  displayTag.value = "";
};

const calculate = () => {
  displayTag.value = eval(displayTag.value);
  // eval(displayTag.value)
  // 3(1+2)
  displayTag.addEventListener("keyup", () => {
    displayTag.value = "";
  });
};

displayTag.addEventListener =
  ("keyup",
  (event) => {
    if (event.key === "Enter") {
      calculate();
    } else {
      return;
    }
  });
