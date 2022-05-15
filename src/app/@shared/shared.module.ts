import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { SafePipe } from './pipes/safe.pipe';
import { VideoService } from './video.service';

@NgModule({
  imports: [TranslateModule, CommonModule],
  declarations: [LoaderComponent, SafePipe],
  providers: [VideoService],
  exports: [LoaderComponent, SafePipe]
})
export class SharedModule {}
