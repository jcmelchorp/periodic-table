import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './modules/material.module';
import { AppPhaseComponent } from './components/app-phase/app-phase.component';
import { AppWikiComponent } from './components/app-wiki/app-wiki.component';
import { AtomDetailsComponent } from './components/atom-details/atom-details.component';
import { AtomComponent } from './components/atom/atom.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';
import { SelectionBarComponent } from './components/selection-bar/selection-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionBarComponent,
    PeriodicTableComponent,
    AtomComponent,
    AtomDetailsComponent,
    FooterComponent,
    AppPhaseComponent,
    AppWikiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
