import { Component, LOCALE_ID, OnInit, Inject } from '@angular/core';
import { StyleModeService } from './style-mode.service';
import { environment } from '../../environments/environment';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginMenuComponent } from "./login-menu/login-menu.component";
import { UserNotificationsMenuComponent } from "./user-notifications-menu/user-notifications-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import configTranslations from 'locale/config.json'; // Add this

@Component({
  standalone: true,
  imports: [NgClass, RouterModule, LoginMenuComponent, UserNotificationsMenuComponent, UserMenuComponent],   selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  configTranslations: any = configTranslations;
  currentLang = 'en';
  menuShow = false;
  SERVER_URL = environment.SERVER_URL_WITH_OUT_SLASH;

  userInfo = JSON.parse(localStorage.getItem('UserInfo') || 'null');
  unReedMessages: any[] = JSON.parse(localStorage.getItem('unReedMessages') || '[]');
  messageBadge = 0;
  notifications = 15;
  userExist?: boolean;
  isOpen = false;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public styleModeService: StyleModeService
  ) {
    this.currentLang = this.localeId || 'en';
  }

  ngOnInit() {
    this.currentLang = this.localeId || 'en';
    this.userExist = !!localStorage.getItem("userToken");
    this.messageBadge = this.unReedMessages.length || 0;
  }

  toggleNavbar() {
    this.menuShow = !this.menuShow;
  }

  public userToken(): string | null {
    return localStorage.getItem("userToken");
  }

  languageMenu() {
    this.isOpen = !this.isOpen;
  }
}
