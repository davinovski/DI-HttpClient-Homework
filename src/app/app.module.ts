import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexElementsComponent } from './index-elements/index-elements.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogresponseInterceptor } from './logresponse.interceptor'
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    {
    provide : HTTP_INTERCEPTORS,
    useClass : LogresponseInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
