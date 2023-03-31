import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CallComponent } from './components/call/call.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { KnowMoreComponent } from './components/know-more/know-more.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'specialties', component: SpecialtiesComponent },
  { path: 'header', component: HeaderComponent },

  { path: 'doctor-card', component: DoctorCardComponent },
  { path: 'know-more', component: KnowMoreComponent },
  { path: 'call', component: CallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
