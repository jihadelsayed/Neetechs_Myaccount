import { Component, OnInit, Inject } from '@angular/core';


import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule],   selector: 'app-sub-menu-content',
  templateUrl: './sub-menu-content.component.html',
  styleUrls: ['./sub-menu-content.component.scss']
})
export class SubMenuContentComponent implements OnInit {
  ngOnInit() {
  }


}
