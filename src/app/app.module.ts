import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.modules';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetermineNeedsComponent } from './pages/determine-needs/determine-needs.component';
import { FormSelectComponent } from './share/components/form-select/form-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetermineNeedsComponent,
    FormSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
