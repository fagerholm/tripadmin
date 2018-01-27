import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarService} from './shared/car/car.service';
import {ParticipantService} from "./shared/participant/participant.service";
import { HttpClientModule } from '@angular/common/http';
import { GiphyService } from './shared/giphy/giphy.service';


import { AppComponent } from './app.component';
import {CarListComponent} from "./car-list/car-list.component";
import { ParticipantListComponent } from './participant-list/participant-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    ParticipantListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [CarService, ParticipantService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
