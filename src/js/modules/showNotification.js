import popupShowHide from "./popupShowHide";

const showNotification = (message, imageID) => {
  document.querySelector(".popup-notification__message").textContent = message;
  document.querySelector(".popup-notification__img").innerHTML = `
    <svg>
      <use xlink:href="#${imageID}"></use>
    </svg>`;

  popupShowHide(document.querySelector(".popup-notification"), true);
};

export default showNotification;
