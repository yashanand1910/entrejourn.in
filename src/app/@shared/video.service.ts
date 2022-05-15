import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(public http: HttpClient) {}

  getVideos(): Observable<Object> {
    return this.http
      .get(`${environment.googleApiUrl}/youtube/v3/search`, {
        params: {
          key: environment.googleApiKey!,
          channelId: environment.youtubeChannelId
        }
      })
      .pipe(
        map((res) => {
          console.debug(res);
          return res;
        })
      );
  }
}
