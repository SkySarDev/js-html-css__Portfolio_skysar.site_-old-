import showNotification from "./showNotification";
import popupShowHide from "./popupShowHide";
// import { popupHandler } from "./handlers";

const sendForm = (data) => {
  if (!document.getElementById("honeypot").value) {
    const popup = document.querySelector(".popup-notification");

    showNotification("Message sending...", "spinner");
    // popupHandler(popup);

    const popupHide = () => {
      setTimeout(() => {
        popupShowHide(popup, false);
        // popupHandler(popup, true);
      }, 5000);
    };

    popupHide();

    // fetch(
    //   "https://script.google.com/macros/s/AKfycbwexEvV9AudKto6CzD_354ZgX6_C6hgZpLefcH3AtXdPhf2z_oWTRO76L2ZMTRWmsT8/exec",
    //   {
    //     method: "POST",
    //     body: new FormData(data),
    //   }
    // )
    //   .then((res) => {
    //     if (res.status === 200) {
    //       showNotification("Message has been sent!", "check-yes");
    //       popupHide();
    //     } else {
    //       throw Error;
    //     }
    //   })
    //   .catch((error) => {
    //     showNotification("Error! Message was not sent!", "check-no");
    //     popupHide();
    //   });
  }
};

export default sendForm;
