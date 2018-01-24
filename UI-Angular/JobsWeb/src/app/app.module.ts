import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { JobswebService } from './jobsweb/jobsweb.service';
import { JobswebModule } from 'app/jobsweb/jobsweb.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    CoreModule,
    JobswebModule
  ],
  providers: [
    JobswebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
