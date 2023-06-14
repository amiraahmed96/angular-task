import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideHomeService {
  imgSlider = [
  '../../assets/slider/slide1.jpg', '../../assets/slider/slide2.jpg', '../../assets/slider/slide3.jpg',
  '../../assets/slider/slide1.jpg', '../../assets/slider/slide2.jpg', '../../assets/slider/slide3.jpg',
  '../../assets/slider/slide1.jpg', '../../assets/slider/slide2.jpg', '../../assets/slider/slide3.jpg',
  '../../assets/slider/slide1.jpg', '../../assets/slider/slide2.jpg', '../../assets/slider/slide3.jpg'];

  constructor() { }

  getSlider() {
    return this.imgSlider;
  }
}
