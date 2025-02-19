const btn0M = document.getElementById("button-0");
const btn1M = document.getElementById("button-1");
const btn2M = document.getElementById("button-2");
const btn3M = document.getElementById("button-3");
const btn4M = document.getElementById("button-4");
const btn5M = document.getElementById("button-5");
const btn6M = document.getElementById("button-6");
const btn7M = document.getElementById("button-7");
const btn8M = document.getElementById("button-8");
const btn9M = document.getElementById("button-9");
const btnAddM = document.getElementById("button-add");
const btnSubM = document.getElementById("button-sub");
const btnDivM = document.getElementById("button-div");
const btnDotM = document.getElementById("button-dot");
const btnMulM = document.getElementById("button-mul");
const deleteBtnM = document.getElementById("button-del");
const resetBtnM = document.getElementById("button-reset");
const equalBtnM = document.getElementById("button-equal");
const allValues = [
  btn0M,
  btn1M,
  btn2M,
  btn3M,
  btn4M,
  btn5M,
  btn6M,
  btn7M,
  btn8M,
  btn9M,
  btnAddM,
  btnSubM,
  btnDivM,
  btnDotM,
  btnMulM,
];
const resultF = document.getElementById("result");
let result = "";

allValues.forEach(function (element) {
  element.onclick = function () {
    result = `${result}`;
    if (!result.includes("e") && result.length <= 17) {
      if (element == btnMulM) {
        result += `*`;
      } else {
        result += `${element.innerText}`;
      }
      result = `${result}`;
      resultF.innerText = result;
    }
  };
});

resetBtnM.onclick = function () {
  result = `${result}`
  if (!result.includes("e")) {
    result = "";
    resultF.innerText = "0";
  }
};

equalBtnM.onclick = function () {
  if (String(eval(result)).includes("Infinity")) {
    result = "Error! division by zero";
    resultF.innerText = result;
    result = `${result}`;
    setTimeout(function () {
      result = "";
      resultF.innerText = "0";
    }, 5000);
    return;
  }
  if (!result.includes("e")) {
    result = `${result}`;
    if (
      result.includes("*/") ||
      result.includes("/*") ||
      result.includes("//")
    ) {
      result = "Invalid operation";
      resultF.innerText = result;
      setTimeout(function () {
        result = "";
        resultF.innerText = "0";
      }, 5000);
      return;
    }
    result = eval(result);
    resultF.innerText = result;
  }
};

deleteBtnM.onclick = function () {
  result = `${result}`;
  if (!result.includes("e")) {
    if (result.length > 1) {
      result = result.slice(0, -1);
    } else {
      result = "0";
    }
  }
  resultF.innerText = result;
};
