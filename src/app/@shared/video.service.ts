import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map, of } from 'rxjs';
import { forEachChild } from 'typescript';
import res from './videos';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private topVideos: any[] = [];

  constructor(public http: HttpClient) {}

  getTopVideos(): Observable<any> {
    return of(res['items'].slice(0, 5));
  }

  getVideosDummy(): Observable<any> {
    return of(res);
  }

  getVideos(): Observable<any> {
    return this.http
      .get(`${environment.googleApiUrl}/youtube/v3/search`, {
        params: {
          key: environment.googleApiKey!,
          channelId: environment.youtubeChannelId,
          order: 'date',
          part: 'snippet',
          type: 'video, id',
          maxResults: 50
        }
      })
      .pipe(
        map((res) => {
          for (let i = 0; i < 4; i++) {
            this.topVideos = res['items'].slice(0, 5);
          }
          return res;
        })
      );
  }
}
