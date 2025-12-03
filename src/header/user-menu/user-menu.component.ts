import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { StyleModeService } from '../style-mode.service';
import { environment } from '../../../environments/environment';

import { LogoutService } from '../../services/logout.service';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  userInfo = JSON.parse(localStorage.getItem('UserInfo')!);
  //authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });
  darkMode: boolean = false;
  currentLang = 'en'; // or 'ar'

  constructor(
    private http: HttpClient,
    public styleModeService: StyleModeService,
    @Inject(LOCALE_ID) public localeId: string,
    private logoutService: LogoutService,
    ) { }

    MY_ACCOUNT_URL = environment.MY_ACCOUNT_URL+ this.currentLang + '/#/' + this.userInfo.site_id

  ngOnInit(): void {

    this.currentLang = this.localeId || 'en'; // or 'ar'

    this.MY_ACCOUNT_URL = environment.MY_ACCOUNT_URL+ this.currentLang + '/#/' + this.userInfo.site_id

    const valueFromLocalStorage = localStorage.getItem('darkMode');

    if (valueFromLocalStorage === null) {
      // handle the case where the value is not found in local storage
    } else {
      // pass the value to the function as a string
      let darkModeValue = JSON.parse(valueFromLocalStorage);
      if (darkModeValue === null) {
        darkModeValue = false;
      }

      this.darkMode = darkModeValue;
    }


  }

  toggleDarkMode() {
    this.styleModeService.setDarkMode(!this.darkMode)
  }
  Logout() {
    // Delegate to LogoutService so logic is shared with the public site.
    this.logoutService.logout();

  }
  handleImageError(event: any) {
    const errorStatus = event.target.status;
    // Treat a failed avatar as an implicit logout.  Use the same
    // service call as the explicit Logout() handler.
    this.logoutService.logout();

    if (errorStatus === 403) {
      // Handle 403 error
    //  console.log("403 Forbidden error occurred.");

    } else if (errorStatus === 404) {
      // Handle 404 error
    //  console.log("404 Not Found error occurred.");
    }
  }
  // Subscription() {
  //   this.http.get(environment.SERVER_URL + 'api/customerPortal', { headers: this.authenticateHttpHeaders })
  //     .subscribe((portalUrl: any) => {
  //       // console.log(portalUrl)
  //       window.location.href = portalUrl[0]
  //       //this.router.navigate(['/login']);
  //     });
  // }
}
