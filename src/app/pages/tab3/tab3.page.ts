import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  slideOpt = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(public dataLocal: LocalDataService) {}
}
