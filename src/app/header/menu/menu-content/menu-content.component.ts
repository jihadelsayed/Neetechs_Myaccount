import { Component, OnInit } from '@angular/core';

import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule],   selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
