import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-edit-personal-info',
  
  templateUrl: './edit-personal-info.component.html',
  styleUrl: './edit-personal-info.component.scss'
})
export class EditPersonalInfoComponent {

}
