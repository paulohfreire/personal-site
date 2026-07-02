import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page.component';
import { EducationPageComponent } from './pages/education-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { IntroPageComponent } from './pages/intro-page.component';
import { WorkPageComponent } from './pages/work-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'intro', component: IntroPageComponent },
  { path: 'work', component: WorkPageComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];
