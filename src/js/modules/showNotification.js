import popupShowHide from "./popupShowHide";

const showNotification = (message, imageID) => {
  document.querySelector(".notification__message").textContent = message;
  document.querySelector(".notification__img").innerHTML = `
    <svg>
      <use xlink:href="#${imageID}"></use>
    </svg>`;

  popupShowHide(".notification", true);
};

export default showNotification;
