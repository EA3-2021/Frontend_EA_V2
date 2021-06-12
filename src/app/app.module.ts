import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeamFormComponent } from './components/team-form/team-form.component';  
import { UserFormComponent } from './components/user-form/user-form.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';   
import { environment } from 'src/environments/environment';


const config: SocketIoConfig = { url: environment.apiURL, options: {} };

@NgModule({
  declarations: [AppComponent,
    TeamFormComponent,
    UserFormComponent,
    UpdateFormComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  SocketIoModule.forRoot(config),
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule
  ],
  providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
