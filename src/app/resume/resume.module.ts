import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeComponent} from './resume.component';
import {WhoamiComponent} from './whoami/whoami.component';
import {AboutComponent} from './about/about.component';
import {AwardsComponent} from './awards/awards.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {SkillsComponent} from './skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  declarations: [
    ResumeComponent,
    WhoamiComponent,
    AboutComponent,
    AwardsComponent,
    PortfolioComponent,
    SkillsComponent,
  ]
})
export class ResumeModule {
}
