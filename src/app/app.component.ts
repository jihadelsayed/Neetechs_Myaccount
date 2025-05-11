import { Title } from '@angular/platform-browser';

import { Component, Inject, LOCALE_ID } from '@angular/core';
import { StyleModeService } from './header/style-mode.service';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { SpinnerComponent } from "./spinner/spinner.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { NgClass } from '@angular/common';
//import { $localize } from '@angular/localize/init';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpinnerComponent, AuthorizationComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NeeTechs';
  LoginURL = environment.LoginURL;
  constructor(
    @Inject(LOCALE_ID) public localeId: string, 
    public styleModeService: StyleModeService,
 // private titleService: Title
){
   // this.titleService.setTitle($localize`:@@appTitle:NeeTechs`);
  }
  ngOnInit(): void {
    //console.log(environment)
  }
}

