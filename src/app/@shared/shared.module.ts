import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [TranslateModule, CommonModule],
  declarations: [LoaderComponent, SafePipe],
  exports: [LoaderComponent, SafePipe]
})
export class SharedModule {}
