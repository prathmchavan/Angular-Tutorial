import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { app_config, app_service_config } from 'src/AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


function initFactory(initService:InitService)
{
  return()=>initService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [
    {
    provide : app_service_config,
    useValue : app_config ,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
