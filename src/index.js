import "./css/main.css";
import "./scss/main.scss";
import { menuEvent } from "./js/menu";
import { CoffeeSlider } from "./js/CoffeeSlider";
import { GiftSlider } from "./js/GiftSlider";
import { ComboSlider } from "./js/ComboSlider";

menuEvent();
new CoffeeSlider();
new GiftSlider();
new ComboSlider();

