import { Component, OnInit, Inject } from '@angular/core';
import menuTranslations from '../../../locale/menu.json';
import { LOCALE_ID } from '@angular/core';
import { StyleModeService } from '../style-mode.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { menu } from '../../../environments/menu';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})    
export class MenuComponent implements OnInit {
  currentLang: string;
  menu = menu;
  menuTranslations: any = menuTranslations;
  currentRoute: string = '';

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public styleModeService: StyleModeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentLang = this.localeId || 'en';
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects.split('/')[1] || '';
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe();
  }
}
