import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

import { RouterModule } from '@angular/router';

import { StyleModeService } from '../style-mode.service';

@Component({
  standalone: true,
  imports: [RouterModule  ], 
   selector: 'app-user-notifications-menu',
  templateUrl: './user-notifications-menu.component.html',
  styleUrls: ['./user-notifications-menu.component.scss']
})
export class UserNotificationsMenuComponent implements OnInit {
  isOpen = false;


  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  
}
