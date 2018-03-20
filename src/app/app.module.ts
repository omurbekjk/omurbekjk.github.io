import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ResumeModule} from './resume/resume.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './shared/navbar/navbar.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ResumeModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
