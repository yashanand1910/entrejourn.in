import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from '@app/videos/videos.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent,
    data: { title: marker('Videos') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule {}
