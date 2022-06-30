import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TeamMemberComponent } from './team-member/team-member.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule],
  declarations: [AboutComponent, TeamMemberComponent]
})
export class AboutModule {}
