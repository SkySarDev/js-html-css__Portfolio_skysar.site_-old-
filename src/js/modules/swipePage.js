const swipePage = (point) => {
  if (point) {
    const mainSlider = document.querySelector(".main__slider");
    const pointsObj = {
      about: 0,
      projects: 100,
      skills: 200,
      contact: 300,
    };

    mainSlider.style.transform = `translateX(-${pointsObj[point]}%)`;
  }
};

export default swipePage;
