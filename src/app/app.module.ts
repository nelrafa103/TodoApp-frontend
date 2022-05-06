import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AccountComponent } from './pages/account/account.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SlideComponent } from './components/slide/slide.component';
import { IntroComponent } from './components/intro/intro.component';
import { CardComponent } from './components/card/card.component';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { AboutMeComponent } from './pages/sign-up/phases/about-me/about-me.component';
import { ConfirmationComponent } from './pages/sign-up/phases/confirmation/confirmation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './pages/notes/notes.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    AccountComponent,
    NavBarComponent,
    SlideComponent,
    IntroComponent,
    CardComponent,

    CardSectionComponent,
    AboutMeComponent,
    ConfirmationComponent,
    FooterComponent,
    CalendarComponent,
    NotesComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    //MatSliderModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
