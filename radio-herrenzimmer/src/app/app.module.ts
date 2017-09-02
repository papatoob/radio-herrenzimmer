import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PlatformService } from './services/platform.service';
import { PlatformsComponent } from './components/platforms/platforms.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlatformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
