import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx'
//import { StatusBar } from '@ionic-native/status-bar/ngx'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { ChatPageModule } from './pages/chat/chat.page';
//import { CalendarPageModule } from './pages/calendar/calendar.page';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
 // CalendarModule,
  SocketIoModule.forRoot(config),
  HttpClientModule
  ],
  providers: [
 // StatusBar,
//  SplashScreen,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
