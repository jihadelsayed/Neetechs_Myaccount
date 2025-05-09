import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-edit-about',
  
  templateUrl: './edit-about.component.html',
  styleUrl: './edit-about.component.scss'
})
export class EditAboutComponent {

}
