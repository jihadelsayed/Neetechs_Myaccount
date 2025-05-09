import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-edit-skills',
  
  templateUrl: './edit-skills.component.html',
  styleUrl: './edit-skills.component.scss'
})
export class EditSkillsComponent {

}
