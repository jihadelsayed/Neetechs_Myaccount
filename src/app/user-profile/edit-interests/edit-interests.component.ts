import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-edit-interests',
  
  templateUrl: './edit-interests.component.html',
  styleUrl: './edit-interests.component.scss'
})
export class EditInterestsComponent {

}
