"use-strict";
let inputR = document.querySelector(".r");
let inputG = document.querySelector(".g");
let inputB = document.querySelector(".b");
let isColored = false;
let bgColor;
let favoriteButton = document.querySelector(".favorites");
let favoriteColors = [];
let p = document.querySelector(".p");
$(".render").on("click", createColor);
let doubleClick = document.querySelector(".double");
doubleClick.addEventListener("dblclick", test);
function test() {
  doubleClick.style.backgroundColor =
    favoriteColors[Math.floor(Math.random() * favoriteColors.length)];
}

favoriteButton.addEventListener("click", addToFavorite);
function addToFavorite() {
  console.log(bgColor, favoriteColors);
  favoriteColors.push(
    RGBToHex(Number(inputR.value), Number(inputG.value), Number(inputB.value))
  );
  p.innerText = `My favorite colors are: ${favoriteColors}`;
  clearInputs();
  console.log(favoriteColors);
}

function createColor() {
  if (
    Number(inputR.value) < 0 ||
    Number(inputR.value) > 255 ||
    Number(inputG.value) < 0 ||
    Number(inputG.value) > 255 ||
    Number(inputB.value) < 0 ||
    Number(inputB.value) > 255
  )
    return;
  console.log(inputR.value, inputG.value, inputB.value);
  bgColor = `rgb(${inputR.value},${inputG.value},${inputB.value})`;

  if (!isColored) {
    $(".first-color").css("background-color", bgColor);
    $(".first-color").css("first-color", "white");
    $(".first-color").text(
      `The chosen color is ${bgColor} and its hexadecimal value is ${RGBToHex(
        Number(inputR.value),
        Number(inputG.value),
        Number(inputB.value)
      )} 
     `
    );

    isColored = true;
  } else {
    $(".second-color").css("background-color", bgColor);
    $(".second-color")
      .text(`The chosen color is ${bgColor} and its hexadecimal value is ${RGBToHex(
      Number(inputR.value),
      Number(inputG.value),
      Number(inputB.value)
    )} 
     `);

    isColored = false;
  }
}

function clearInputs() {
  inputR.value = "";
  inputG.value = "";
  inputB.value = "";
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb((\d+),\s(\d+),\s(\d+))$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  console.log("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]));
  console.log(x, rgb);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}
