const hexBtn = document.querySelector(".hex-btn");
const rgbBtn = document.querySelector(".rgb-btn");
const colorBoxEl = document.querySelector(".color-box");
const colorValueEl = document.querySelector(".color-value");
const cpyColorBtn = document.querySelector(".cpy-color-btn");
console.log(hexBtn, rgbBtn, colorBoxEl, colorValueEl, cpyColorBtn);

hexBtn.addEventListener("click", () => {
  const hexContent = "ABCDEF0123456";
  let bag = "#";

  for (let i = 0; i < 6; i++) {
    bag += hexContent.charAt(Math.floor(Math.random() * hexContent.length));
  }
  console.log(bag);
  colorBoxEl.style.backgroundColor = bag;
  colorValueEl.textContent = bag;
  //   cpyColorBtn.addEventListener("click", () => {
  //     navigator.clipboard.writeText(bag);
  //     alert(`${bag} "Color Copied Successfully!"`);
  //   });
});

rgbBtn.addEventListener("click", () => {
  let rValue = 255;
  let gValue = 255;
  let bValue = 255;

  let bag = "";

  let rgbValue = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  console.log(rgbValue);
  colorBoxEl.style.backgroundColor = rgbValue;
  colorValueEl.textContent = rgbValue;
});

cpyColorBtn.addEventListener("click", () => {
  if (colorValueEl.textContent === "Color Value") {
    alert("Please Select Either Hex or Rgb Value.");
  } else {
    navigator.clipboard.writeText(colorValueEl.textContent);
    alert(`${colorValueEl.textContent} "Color Copied Successfully!"`);
    colorValueEl.textContent = "Color Value";
    colorBoxEl.style.backgroundColor = "#fff";
  }
});
