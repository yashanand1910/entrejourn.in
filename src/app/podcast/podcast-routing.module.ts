import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { PodcastComponent } from './podcast.component';

const routes: Routes = [
  {
    path: '',
    component: PodcastComponent,
    data: {
      title: marker('Podcast')
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule {}
