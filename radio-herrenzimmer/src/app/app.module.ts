import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PlatformService } from './services/platform.service';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { TitleService } from './services/title.service';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformsComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PlatformService,
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
