import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResumeRoutingModule} from './resume-routing.module';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {SkillsComponent} from './skills/skills.component';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume.component';
import {WhoiamComponent} from './whoiam/whoiam.component';
import {AwardsComponent} from './awards/awards.component';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  declarations: [
    WhoiamComponent,
    PortfolioComponent,
    SkillsComponent,
    AwardsComponent,
    AboutComponent,
    ResumeComponent
  ]
})
export class ResumeModule {
}
