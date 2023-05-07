import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthGuard } from './authorization/services/not-auth.guard';
import { ProfileRoutes } from './Profile/app-routing.module';

const routes: Routes = [
  // authentication component
  //{ path:'',component: HomeComponent,canActivate:[NotAuthGuard] },
  //{ path:'', pathMatch:'full', redirectTo:'home' ,component: AppComponent,canActivate:[AuthGuard] },

];

@NgModule({

  imports: [
    RouterModule.forChild(ProfileRoutes), // home routes
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
