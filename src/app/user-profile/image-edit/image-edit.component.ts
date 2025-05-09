import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-image-edit',
  
  templateUrl: './image-edit.component.html',
  styleUrl: './image-edit.component.scss'
})
export class ImageEditComponent {

}
