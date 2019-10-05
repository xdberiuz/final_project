export class CoffeeSlider {
  constructor() {
    this.sliderBtn = document.querySelector(".coffee__btn");
    this.sliderLine = document.querySelector(".coffee__items");
    this.sliders = document.querySelectorAll(".coffee__item");
    this.body = document.querySelector("body").offsetWidth;
    this.step = 0;
    this.deg = 45;
    this.onClick();
  }

  move() {
    this.screenSize();
    this.step += this.deg;
    if (this.step >= 90) {
      this.step = 0;
    }
    this.sliderLine.style.transform = "translateX(-" + this.step + "%)";
    this.opacity();
  }
  screenSize() {
    if (this.body <= 600) {
      this.deg = 12.5;
      if (this.step >= 100) {
        this.step = 0;
        this.deg = 0;
      }
    } else if (this.body <= 815) {
      this.deg = 25;
      if (this.step > 100) {
        this.step = 0;
        this.deg = 0;
      }
    } else if (this.body <= 980) {
      this.deg = 25;
      if (this.step >= 75) {
        this.step = 0;
        this.deg = 0;
      }
    } else if (this.body <= 1025) {
      this.deg = 25;
      if (this.step >= 75) {
        this.step = 0;
        this.deg = 0;
      }
    } else if (this.body <= 1100) {
      this.deg = 50;
      if (this.step >= 50) {
        this.step = 0;
        this.deg = 0;
      }
    }
  }
  opacity() {
    if (this.step == 45 && 50) {
      this.sliders[2].style.opacity = "1";
      this.sliders[3].style.opacity = "1";
      this.sliders[6].style.opacity = "1";
      this.sliders[7].style.opacity = "1";
      this.sliders[0].style.opacity = "0.3";
      this.sliders[1].style.opacity = "0.3";
      this.sliders[4].style.opacity = "0.3";
      this.sliders[5].style.opacity = "0.3";
    } else if (this.step == 0) {
      this.sliders[0].style.opacity = "1";
      this.sliders[1].style.opacity = "1";
      this.sliders[4].style.opacity = "1";
      this.sliders[5].style.opacity = "1";
      this.sliders[2].style.opacity = "0.3";
      this.sliders[3].style.opacity = "0.3";
      this.sliders[6].style.opacity = "0.3";
      this.sliders[7].style.opacity = "0.3";
    } else if (this.body <= 1100) {
      for (let i = 0; i < this.sliders.length; i++) {
        this.sliders[i].style.opacity = "1";
      }
    }
  }

  onClick() {
    this.sliderBtn.onclick = () => {
      this.move();
    };
  }
}
