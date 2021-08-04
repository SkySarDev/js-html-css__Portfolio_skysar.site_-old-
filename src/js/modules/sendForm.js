const sendForm = (data) => {
  const honeypot = document.getElementById("honeypot");

  if (!honeypot.value) {
    fetch(
      "https://script.google.com/macros/s/AKfycbyilYaCIkV_tHLdz-aCuZwugPPQRdSUgJUanfsMzFFMm4iitAlj1_IuI3VfC_ec3dJgIg/exec",
      {
        method: "POST",
        body: new FormData(data),
      }
    )
      .then((res) => {
        if (res.status !== 200) {
          console.log("send");
          throw Error;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default sendForm;
