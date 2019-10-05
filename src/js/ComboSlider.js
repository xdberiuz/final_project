export class ComboSlider {
  constructor() {
    this.sliderLine = document.querySelector(".combo__sliders");
    this.sliders = document.querySelectorAll(".combo__slider");
    this.body = document.querySelector("body").offsetWidth;
    this.sliderBtn = document.querySelector(".combo__btn");
    this.step = 0;
    this.deg = 50;

    this.onClick();
  }

  move() {
    this.screenSize();
    this.step += this.deg;
    if (this.step >= 100) {
      this.step = 0;
    }
    this.sliderLine.style.transform = "translateX(-" + this.step + "%)";
    this.opacity();
  }

  screenSize() {
    if (this.body <= 815) {
        this.deg = 16.6;
      if (this.step >= 83) {
        this.deg = 0;
        this.step = 0;
      }
    } else if (this.body <= 1025) {
      this.deg = 33.5;
      if (this.step >= 67) {
        this.deg = 0;
        this.step = 0;
      }
    }
  }

  opacity() {
    if (this.step == 50) {
      for (let i = 0; i < this.sliders.length; i++) {
        this.sliders[i].style.opacity = "0.4";
        if (i >= 3) {
          this.sliders[i].style.opacity = "1";
        }
      }
    } else if (this.step == 0) {
      for (let i = 0; i < this.sliders.length; i++) {
        this.sliders[i].style.opacity = "1";
        if (i >= 3) {
          this.sliders[i].style.opacity = "0.4";
        }
      }
    } else {
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
