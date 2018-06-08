import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeComponent} from './resume.component';
import {WhoamiComponent} from './whoami/whoami.component';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  declarations: [
    ResumeComponent,
    WhoamiComponent,
  ]
})
export class ResumeModule {
}
