import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-connected-accounts',
  
  templateUrl: './connected-accounts.component.html',
  styleUrl: './connected-accounts.component.scss'
})
export class ConnectedAccountsComponent {

}
