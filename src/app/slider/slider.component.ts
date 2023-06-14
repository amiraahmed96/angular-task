import { SlideHomeService } from './../services/slide-home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public imgpaths;
  constructor(private imgPath: SlideHomeService) { }

  ngOnInit() {
    this.imgpaths = this.imgPath.getSlider();
  }

}
