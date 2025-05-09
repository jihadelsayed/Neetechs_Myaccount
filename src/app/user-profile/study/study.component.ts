import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-study',
  
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss'
})
export class StudyComponent {

}
