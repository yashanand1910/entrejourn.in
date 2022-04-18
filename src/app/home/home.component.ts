import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayVideo1 = false;
  displayVideo2 = false;

  constructor() {}

  ngOnInit() {}

  togglePopup1() {
    this.displayVideo1 = !this.displayVideo1;
  }

  togglePopup2() {
    this.displayVideo2 = !this.displayVideo2;
  }
}
