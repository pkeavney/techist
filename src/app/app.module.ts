import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { ClientsComponent } from './experience/clients/clients.component';
import { TechnologiesComponent } from './experience/technologies/technologies.component';
import { LanguagesComponent } from './experience/technologies/languages/languages.component';
import { DatabasesComponent } from './experience/technologies/databases/databases.component';
import { IndustriesComponent } from './experience/industries/industries.component';
import { SystemsComponent } from './experience/clients/systems/systems.component';
import { ChronologyComponent } from './experience/chronology/chronology.component';
import { ShowDirective } from './show.directive';
import { HideDirective } from './hide.directive';
// import { MenuComponent } from './menu/menu.component';
// import { FetchService } from './fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    ExperienceComponent,
    HighlightDirective,
    ClientsComponent,
    TechnologiesComponent,
    LanguagesComponent,
    DatabasesComponent,
    IndustriesComponent,
    SystemsComponent,
    ChronologyComponent,
    ShowDirective,
    HideDirective
    // MenuComponent,
    // FetchService
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
