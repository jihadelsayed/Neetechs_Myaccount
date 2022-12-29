import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

// ng ----- Matriall
import { MaterialModule } from './material';

///forms
import {FormsModule,
  ReactiveFormsModule
} from '@angular/forms'

///http request api request
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//notification api jeson
import { httpInterceptor } from 'src/interceptor/http-interceptor';
import { SelectionLoaderModule } from './selection-loader/selection-loader.module';
import { UserService } from 'src/services/auth/user.service';
import { AuthGuard } from 'src/services/auth/auth.guard';
//import { ChatService } from 'src/services/websocket/chat.service';
//import { WebsocketService } from 'src/services/websocket/websocket.service';
//import { SearchService } from 'src/services/search/search.service';
import { SpinnerComponent } from './spinner/spinner.component';

//import { QuranService } from 'src/services/Quran/Quran.service';

//import { EchartsxModule } from 'echarts-for-angular';

import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';
import { LoginMenuComponent } from './header/login-menu/login-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchMenuComponent } from './header/search-menu/search-menu.component';



import { AboutComponent } from './Profile/about/about.component';
import { CompetenciesComponent } from './Profile/competencies/competencies.component';
import { DeleteAccountComponent } from './Profile/delete-account/delete-account.component';
import { EditErfarenhetComponent } from './Profile/edit-erfarenhet/edit-erfarenhet.component';
import { EditIntressenComponent } from './Profile/edit-intressen/edit-intressen.component';
import { EditKompetenserComponent } from './Profile/edit-kompetenser/edit-kompetenser.component';
import { EditOMComponent } from './Profile/edit-om/edit-om.component';
import { EditPersronUppgifterComponent } from './Profile/edit-persron-uppgifter/edit-persron-uppgifter.component';
import { EditStudierComponent } from './Profile/edit-studier/edit-studier.component';
import { ExperienceComponent } from './Profile/experience/experience.component';
import { ImageEditComponent } from './Profile/image-edit/image-edit.component';
import { InterestsComponent } from './Profile/interests/interests.component';
import { PersonalInfoComponent } from './Profile/personal-info/personal-info.component';
import { ProfileHeaderComponent } from './Profile/profile-header/profile-header.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { StudyComponent } from './Profile/study/study.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    UserMenuComponent,
    UserNotificationsMenuComponent,
    // profile

    EditOMComponent,
    EditPersronUppgifterComponent,
    EditErfarenhetComponent,
    EditStudierComponent,
    EditKompetenserComponent,
    EditIntressenComponent,
    DeleteAccountComponent,
    PersonalInfoComponent,
    CompetenciesComponent,
    StudyComponent,
    InterestsComponent,
    ExperienceComponent,
    ProfileComponent,
    AboutComponent,
    ProfileHeaderComponent,
    //ProfileServicesComponent,
    ImageEditComponent,
    AppComponent,
    HeaderComponent,
    SpinnerComponent,
    LoginMenuComponent,
    MenuComponent,
    SearchMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule,

    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    // FlexLayoutModule,
    SelectionLoaderModule,
    //ToastrModule.forRoot(),
    //
    //
    //
    //
    //
    AvatarModule,
    // StripeModule.forRoot(""),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [UserService,AuthGuard,
    //ChatService,WebsocketService,SearchService,
    //QuranService,NamesService,
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
