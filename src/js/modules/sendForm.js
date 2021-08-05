import showNotification from "./showNotification";

const sendForm = (data) => {
  if (!document.getElementById("honeypot").value) {
    showNotification("Message sending...", "spinner");

    fetch(
      "https://script.google.com/macros/s/AKfycbwexEvV9AudKto6CzD_354ZgX6_C6hgZpLefcH3AtXdPhf2z_oWTRO76L2ZMTRWmsT8/exec",
      {
        method: "POST",
        body: new FormData(data),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          showNotification("Message has been sent!", "check-yes");
        } else {
          throw Error;
        }
      })
      .catch((error) => {
        showNotification("Error! Message was not sent!", "check-no");
      });
  }
};

export default sendForm;
