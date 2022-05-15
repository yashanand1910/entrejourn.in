import { Component, OnInit } from '@angular/core';
import { VideoService } from '@app/@shared/video.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  isLoading: boolean = false;
  math = Math;
  page = 0;
  pageSize = 5;
  videos: any[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.videoService
      .getVideosDummy()
      .pipe(delay(2000))
      .subscribe((res) => {
        this.isLoading = false;
        this.videos = res['items'];
      });
  }
}
