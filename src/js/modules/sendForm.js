import showNotification from "./showNotification";
import popupShowHide from "./popupShowHide";

const sendForm = (data) => {
  if (!document.getElementById("honeypot").value) {
    const popup = document.querySelector(".popup-notification");
    const lang = localStorage.getItem("lang") || "en";
    const messages = {
      en: {
        sending: "Message sending...",
        success: "Message has been sent!",
        error: "Error! Message was not sent!",
      },
      ru: {
        sending: "Отправка сообщения...",
        success: "Сообщение отправлено!",
        error: "Ошибка! Сообщение не отправлено!",
      },
    };

    showNotification(messages[lang].sending, "spinner");

    const popupHide = () => {
      setTimeout(() => {
        popupShowHide(popup, false);
      }, 5000);
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbwexEvV9AudKto6CzD_354ZgX6_C6hgZpLefcH3AtXdPhf2z_oWTRO76L2ZMTRWmsT8/exec",
      {
        method: "POST",
        body: new FormData(data),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          showNotification(messages[lang].success, "check-yes");
          popupHide();
        } else {
          throw Error;
        }
      })
      .catch((error) => {
        showNotification(messages[lang].error, "check-no");
        popupHide();
      });
  }
};

export default sendForm;
