import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PlatformService } from './service/platform.service';
import { PlatformsComponent } from './component/platforms/platforms.component';
import { TitleService } from './service/title.service';
import { TitleComponent } from './component/title/title.component';
import { ImprintComponent } from './component/imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformsComponent,
    TitleComponent,
    ImprintComponent
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
