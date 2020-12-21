import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';
import {SkillComponent} from './skills/skill/skill.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
