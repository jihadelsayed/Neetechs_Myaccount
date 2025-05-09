import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-resume-builder',
  
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.scss'
})
export class ResumeBuilderComponent {

}
