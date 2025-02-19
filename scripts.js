const position1Parent = document.getElementById("position1-parent");
const position2Parent = document.getElementById("position2-parent");
const position3Parent = document.getElementById("position3-parent");
const position1 = document.getElementById("position1");
const position2 = document.getElementById("position2");
const position3 = document.getElementById("position3");
const themesContainer = document.getElementById("themes-container-id");
const resultContainer = document.querySelector(".result-container");
const btnContainer = document.querySelector(".buttons");
const btn0 = document.getElementById("button-0");
const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const btn3 = document.getElementById("button-3");
const btn4 = document.getElementById("button-4");
const btn5 = document.getElementById("button-5");
const btn6 = document.getElementById("button-6");
const btn7 = document.getElementById("button-7");
const btn8 = document.getElementById("button-8");
const btn9 = document.getElementById("button-9");
const btnAdd = document.getElementById("button-add");
const btnSub = document.getElementById("button-sub");
const btnDiv = document.getElementById("button-div");
const btnDot = document.getElementById("button-dot");
const btnMul = document.getElementById("button-mul");
const btnsWithSameStyling = [
  btn0,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btnAdd,
  btnSub,
  btnDiv,
  btnDot,
  btnMul,
];
const deleteBtn = document.getElementById("button-del");
const resetBtn = document.getElementById("button-reset");
const equalBtn = document.getElementById("button-equal");
position2.classList.add("hide");
position3.classList.add("hide");

if (!position1.classList.contains("hide")) {
  btnsWithSameStyling.forEach(function (element) {
    element.onmouseover = function () {
      element.style.background = "white";
    };
    element.onmouseleave = function () {
      element.style.background = "#eae3dc";
    };
  });
  deleteBtn.onmouseover = function () {
    deleteBtn.style.background = "#a0adda";
  };
  deleteBtn.onmouseleave = function () {
    deleteBtn.style.background = "#637097";
  };
  resetBtn.onmouseover = function () {
    resetBtn.style.background = "#a0adda";
  };
  resetBtn.onmouseleave = function () {
    resetBtn.style.background = "#637097";
  };
  equalBtn.onmouseover = function () {
    equalBtn.style.background = "#f5796b";
  };
  equalBtn.onmouseleave = function () {
    equalBtn.style.background = "#d03f2f";
  };
}

position1Parent.onclick = function () {
  position1.classList.remove("hide");
  position2.classList.add("hide");
  position3.classList.add("hide");

  document.body.style.backgroundColor = "#3a4764";
  document.querySelectorAll("*").forEach((element) => {
    element.style.color = "white";
  });
  document.querySelectorAll("button").forEach((element) => {
    element.style.color = "#444b5a";
  });
  themesContainer.style.backgroundColor = "#232c43";
  position1.style.backgroundColor = "#d03f2f";
  resultContainer.style.backgroundColor = "#182034";
  btnContainer.style.backgroundColor = "#232c43";

  btnsWithSameStyling.forEach(function (element) {
    element.style.backgroundColor = "#eae3dc";
    element.style.boxShadow = "#b4a597";
    element.onmouseover = function () {
      element.style.background = "white";
    };
    element.onmouseleave = function () {
      element.style.background = "#eae3dc";
    };
  });

  deleteBtn.style.background = "#637097";
  deleteBtn.style.boxShadow = "#404e72";
  deleteBtn.style.color = "white";
  deleteBtn.onmouseover = function () {
    deleteBtn.style.background = "#a0adda";
  };
  deleteBtn.onmouseleave = function () {
    deleteBtn.style.background = "#637097";
  };

  resetBtn.style.background = "#637097";
  resetBtn.style.boxShadow = "#404e72";
  resetBtn.style.color = "white";
  resetBtn.onmouseover = function () {
    resetBtn.style.background = "#a0adda";
  };
  resetBtn.onmouseleave = function () {
    resetBtn.style.background = "#637097";
  };

  equalBtn.style.background = "#d03f2f";
  equalBtn.style.boxShadow = "#93261a";
  equalBtn.style.color = "white";
  equalBtn.onmouseover = function () {
    equalBtn.style.background = "#f5796b";
  };
  equalBtn.onmouseleave = function () {
    equalBtn.style.background = "#d03f2f";
  };
};

position2Parent.onclick = function () {
  position1.classList.add("hide");
  position2.classList.remove("hide");
  position3.classList.add("hide");

  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  document.querySelectorAll("*").forEach((element) => {
    element.style.color = "hsl(60, 10%, 19%)";
  });
  themesContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
  position2.style.backgroundColor = "hsl(25, 98%, 40%)";
  resultContainer.style.backgroundColor = "hsl(0, 0%, 93%)";
  btnContainer.style.backgroundColor = "hsl(0, 5%, 81%)";

  btnsWithSameStyling.forEach(function (element) {
    element.style.backgroundColor = "hsl(45, 7%, 89%)";
    element.style.boxShadow = "hsl(35, 11%, 61%)";
    element.onmouseover = function () {
      element.style.background = "white";
    };
    element.onmouseleave = function () {
      element.style.background = "hsl(45, 7%, 89%)";
    };
  });

  deleteBtn.style.background = "hsl(185, 42%, 37%)";
  deleteBtn.style.boxShadow = "hsl(185, 58%, 25%)";
  deleteBtn.style.color = "white";
  deleteBtn.onmouseover = function () {
    deleteBtn.style.background = "hsl(185, 61.40%, 44.70%)";
  };
  deleteBtn.onmouseleave = function () {
    deleteBtn.style.background = "hsl(185, 42%, 37%)";
  };

  resetBtn.style.background = "hsl(185, 42%, 37%)";
  resetBtn.style.boxShadow = "hsl(185, 58%, 25%)";
  resetBtn.style.color = "white";
  resetBtn.onmouseover = function () {
    resetBtn.style.background = "hsl(185, 61.40%, 44.70%)";
  };
  resetBtn.onmouseleave = function () {
    resetBtn.style.background = "hsl(185, 42%, 37%)";
  };

  equalBtn.style.background = "hsl(25, 98%, 40%)";
  equalBtn.style.boxShadow = "hsl(25, 99%, 27%)";
  equalBtn.style.color = "white";
  equalBtn.onmouseover = function () {
    equalBtn.style.background = "hsl(25, 93.00%, 55.10%)";
  };
  equalBtn.onmouseleave = function () {
    equalBtn.style.background = "hsl(25, 98%, 40%)";
  };
};

position3Parent.onclick = function () {
  position1.classList.add("hide");
  position2.classList.add("hide");
  position3.classList.remove("hide");

  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  document.querySelectorAll("*").forEach((element) => {
    element.style.color = "hsl(52, 100%, 62%)";
  });
  themesContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
  position3.style.backgroundColor = "hsl(176, 100%, 44%)";
  resultContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
  btnContainer.style.backgroundColor = "hsl(268, 71%, 12%)";

  btnsWithSameStyling.forEach(function (element) {
    element.style.backgroundColor = "hsl(268, 47%, 21%)";
    element.style.boxShadow = "hsl(290, 70%, 36%)";
    element.onmouseover = function () {
      element.style.background = "hsl(290, 80.80%, 30.60%)";
    };
    element.onmouseleave = function () {
      element.style.background = "hsl(268, 47%, 21%)";
    };
  });

  deleteBtn.style.background = "hsl(281, 89%, 26%)";
  deleteBtn.style.boxShadow = "hsl(185, 58%, 25%)";
  deleteBtn.style.color = "white";
  deleteBtn.onmouseover = function () {
    deleteBtn.style.background = "hsl(290, 77.90%, 26.70%)";
  };
  deleteBtn.onmouseleave = function () {
    deleteBtn.style.background = "hsl(281, 89%, 26%)";
  };

  resetBtn.style.background = "hsl(281, 89%, 26%)";
  resetBtn.style.boxShadow = "hsl(285, 91%, 52%)";
  resetBtn.style.color = "white";
  resetBtn.onmouseover = function () {
    resetBtn.style.background = "hsl(290, 77.90%, 26.70%)";
  };
  resetBtn.onmouseleave = function () {
    resetBtn.style.background = "hsl(281, 89%, 26%)";
  };

  equalBtn.style.background = "hsl(176, 100%, 44%)";
  equalBtn.style.boxShadow = "hsl(177, 92%, 70%)";
  equalBtn.style.color = "black";
  equalBtn.onmouseover = function () {
    equalBtn.style.background = "hsl(176, 100%, 61.80%)";
  };
  equalBtn.onmouseleave = function () {
    equalBtn.style.background = "hsl(176, 100%, 44%)";
  };
};
