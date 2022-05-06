import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AboutMeComponent } from './pages/sign-up/phases/about-me/about-me.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ConfirmationComponent } from './pages/sign-up/phases/confirmation/confirmation.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'SignUp/AboutMe', component: AboutMeComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp/Confirmation', component: ConfirmationComponent },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Notes', component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
