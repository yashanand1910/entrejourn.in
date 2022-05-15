import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [VideosComponent],
  imports: [CommonModule, VideosRoutingModule, NgbPaginationModule]
})
export class VideosModule {}
