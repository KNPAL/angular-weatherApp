import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SaveListComponent } from './components/save-list/save-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SaveListComponent,
    ProfileComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
