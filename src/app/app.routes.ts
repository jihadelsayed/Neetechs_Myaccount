import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthGuard } from './authorization/services/not-auth.guard';

export const routes: Routes = [
  // Add your routes here (example below)
  // { path: '', component: HomeComponent, canActivate: [NotAuthGuard] },
  { path: '**', component: NotFoundComponent }
];
