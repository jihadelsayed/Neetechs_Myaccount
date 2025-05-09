import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-edit-education',
  
  templateUrl: './edit-education.component.html',
  styleUrl: './edit-education.component.scss'
})
export class EditEducationComponent {

}
