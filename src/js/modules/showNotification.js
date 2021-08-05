const showNotification = (message, imageID) => {
  document.querySelector(".notification__message").textContent = message;
  document.querySelector(".notification__img").innerHTML = `
    <svg>
      <use xlink:href="#${imageID}"></use>
    </svg>`;

  document.getElementById("notification").classList.add("show");
};

export default showNotification;
