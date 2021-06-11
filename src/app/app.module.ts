import { NgModule } from '@angular/core';
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
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'; 


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [AppComponent,
    TeamFormComponent,
    UserFormComponent,
    UpdateFormComponent,
    ForgotPasswordComponent],
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
})
export class AppModule {}
