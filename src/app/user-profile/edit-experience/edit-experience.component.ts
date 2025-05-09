import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-edit-experience',
  
  templateUrl: './edit-experience.component.html',
  styleUrl: './edit-experience.component.scss'
})
export class EditExperienceComponent {

}
