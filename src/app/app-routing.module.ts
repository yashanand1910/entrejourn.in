import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'videos',
      loadChildren: () => import('./videos/videos.module').then((m) => m.VideosModule)
    },
    {
      path: 'blog',
      loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule)
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)
    }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
