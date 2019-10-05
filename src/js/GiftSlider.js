export class GiftSlider {
  constructor() {
    this.btns = document.querySelectorAll(".giftset__button");
    this.products = document.querySelectorAll(".giftset__block");
    this.img = document.querySelectorAll(".giftset__content-ims");
    this.btns[0].classList.add("active");
    this.products[0].style.opacity = "1";
    this.img[0].style.opacity = "1";

    this.slider();
  }

  slider() {
    for (let i = 0; i < this.btns.length; i++) {
      this.btns[i].onclick = () => {
        this.toogleOff();
        this.btns[i].classList.add("active");
        this.products[i].style.opacity = "1";
        this.img[i].style.opacity = "1";
      };
    }
  }

  toogleOff() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].style.opacity = "0";
      this.img[i].style.opacity = "0";
      this.btns[i].classList.remove("active");
    }
  }
}
