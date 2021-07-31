const overflow = (point) => {
  const main = document.querySelector(".main");
  const mainHeight = main.offsetHeight;
  const pointHeight = document.querySelector(
    `.${point} .container`
  ).offsetHeight;

  if (pointHeight <= mainHeight) main.style.overflowY = "hidden";
  else main.style.overflowY = "auto";

  main.scrollTo(0, 0);
};

export { overflow };
