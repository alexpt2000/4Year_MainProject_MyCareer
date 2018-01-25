import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { JobswebService } from './jobsweb/jobsweb.service';
import { JobswebModule } from 'app/jobsweb/jobsweb.module';

import { CustomFormsModule } from 'ng2-validation'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CustomFormsModule,

    CoreModule,
    JobswebModule
  ],
  providers: [
    JobswebService,
    CustomFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
