const popupShowHide = (popup, show) => {
  const popupContent = popup.querySelector(".popup__content");

  if (show) {
    popup.classList.add("show");

    setTimeout(() => popupContent.classList.add("show"), 50);
  } else {
    popupContent.classList.remove("show");

    setTimeout(() => popup.classList.remove("show"), 400);
  }
};

export default popupShowHide;
