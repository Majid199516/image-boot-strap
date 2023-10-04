import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig],
})
export class AppComponent {
  title = 'image';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['assets/image-slider.png', 'assets/invoice-02.webp', 'assets/newss.webp'];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
