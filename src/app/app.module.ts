import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { JwtInterceptor } from './authorization/Jwt-interceptor.interceptor';
import { NotAuthGuard } from './authorization/services/not-auth.guard';
import { AuthGuard } from './authorization/services/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginMenuComponent } from './header/login-menu/login-menu.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchMenuComponent } from './header/search-menu/search-menu.component';
import { MaterialModule } from './material';
import { ReactiveFormsModule } from '@angular/forms';

// spinner
import { SpinnerComponent } from './spinner/spinner.component';

/// profiles imports
import { AboutComponent } from './Profile/about/about.component';
import { CompetenciesComponent } from './Profile/competencies/competencies.component';
import { CompleteAboutComponent } from './Profile/complete/complete-about/complete-about.component';
import { CompleteExperienceComponent } from './Profile/complete/complete-experience/complete-experience.component';
import { CompleteLocationComponent } from './Profile/complete/complete-location/complete-location.component';
import { CompletePersonalInfoComponent } from './Profile/complete/complete-personal-info/complete-personal-info.component';
import { CompleteStudyComponent } from './Profile/complete/complete-study/complete-study.component';
import { DeleteAccountComponent } from './Profile/delete-account/delete-account.component';
import { EditErfarenhetComponent } from './Profile/edit-erfarenhet/edit-erfarenhet.component';
import { EditIntressenComponent } from './Profile/edit-intressen/edit-intressen.component';
import { EditKompetenserComponent } from './Profile/edit-kompetenser/edit-kompetenser.component';
import { EditPersronUppgifterComponent } from './Profile/edit-persron-uppgifter/edit-persron-uppgifter.component';
import { EditStudierComponent } from './Profile/edit-studier/edit-studier.component';
import { ExperienceComponent } from './Profile/experience/experience.component';
import { ImageEditComponent } from './Profile/image-edit/image-edit.component';
import { InterestsComponent } from './Profile/interests/interests.component';
import { PersonalInfoComponent } from './Profile/personal-info/personal-info.component';
import { ProfileHeaderComponent } from './Profile/profile-header/profile-header.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { StudyComponent } from './Profile/study/study.component';

import { SelectionLoaderModule } from './spinner/selection-loader/selection-loader.module';
import { EditOMComponent } from './Profile/edit-om/edit-om.component';

//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    NotFoundComponent,
    AuthorizationComponent,
    HomeComponent,
    // header component
    HeaderComponent,
    LoginMenuComponent,
    UserMenuComponent,
    UserNotificationsMenuComponent,
    MenuComponent,
    SearchMenuComponent,
    // spinner
    SpinnerComponent,

    // profile
    EditErfarenhetComponent,
    EditStudierComponent,
    EditKompetenserComponent,
    EditIntressenComponent,
    DeleteAccountComponent,
    PersonalInfoComponent,
    CompetenciesComponent,
    EditOMComponent,
    InterestsComponent,
    ExperienceComponent,
    ProfileComponent,
    AboutComponent,
    ProfileHeaderComponent,
    CompleteStudyComponent,
    CompleteExperienceComponent,
    CompletePersonalInfoComponent,
    ImageEditComponent,
    CompleteLocationComponent,
    CompleteAboutComponent,
    EditPersronUppgifterComponent,
    StudyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,


    // spinner
    SelectionLoaderModule,

    // flex
    //FlexLayoutModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },NotAuthGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
