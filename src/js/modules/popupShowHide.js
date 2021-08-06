const popupShowHide = (popupSelector, show) => {
  const popupWrapper = document.querySelector(".popup");
  const popup = document.querySelector(popupSelector);

  if (show) {
    popupWrapper.classList.add("show");

    setTimeout(() => popup.classList.add("show"), 10);
  } else {
    popup.classList.remove("show");

    setTimeout(() => popupWrapper.classList.remove("show"), 500);
  }
};

export default popupShowHide;
