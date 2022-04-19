import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '@app/blog/blog.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    data: { title: marker('Blog') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
