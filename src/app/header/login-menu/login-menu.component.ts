import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from '../style-mode.service';
import { environment } from '../../../environments/environment';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule],   selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }
  logIn() {
    window.location.href = environment.LoginURL + window.navigator.language.slice(0, 2)+'/#/signIn' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language.slice(0, 2) + "&" + "pathname=" + window.location.pathname;
  }
  SignUp() {
    window.location.href = environment.LoginURL + window.navigator.language.slice(0, 2)+'/#/signUp' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language.slice(0, 2) + "&" + "pathname=" + window.location.pathname;
  }
}
