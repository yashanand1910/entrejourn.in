import { Component, OnInit } from '@angular/core';
import { VideoService } from '@app/@shared/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayVideo1 = false;
  displayVideo2 = false;
  topVideos: any[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getTopVideos().subscribe((videos) => {
      this.topVideos = videos;
    });
  }

  togglePopup1() {
    this.displayVideo1 = !this.displayVideo1;
  }

  togglePopup2() {
    this.displayVideo2 = !this.displayVideo2;
  }

  getStoryImages() {
    const images = [];
    const baseURL = 'assets/story/';
    for (let i = 1; i <= 6; i++) {
      images.push(baseURL + `${i}.jpg`);
    }

    return images;
  }
}
