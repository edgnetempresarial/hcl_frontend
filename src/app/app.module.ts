import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EventsComponent } from './pages/events/events.component';
import { EventviewComponent } from './pages/eventview/eventview.component';
import { EditeventComponent } from './pages/editevent/editevent.component';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EventsComponent,
    EventviewComponent,
    EditeventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
