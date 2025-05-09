import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-profile-summary',
  
  templateUrl: './profile-summary.component.html',
  styleUrl: './profile-summary.component.scss'
})
export class ProfileSummaryComponent {

}
