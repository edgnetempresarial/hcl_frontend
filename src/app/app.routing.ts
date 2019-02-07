import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventviewComponent } from './pages/eventview/eventview.component';
import { EventsComponent } from './pages/events/events.component';
import { EditeventComponent } from './pages/editevent/editevent.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventviewComponent },
  { path: 'events/:id/event', component: EditeventComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
