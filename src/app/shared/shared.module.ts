import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    FooterComponent,
    ContactComponent,
  ]
})
export class SharedModule {
}
