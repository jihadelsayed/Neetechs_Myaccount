import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(@Inject(LOCALE_ID) public localeId: string, private httpClient: HttpClient) { }
  currentLang = this.localeId || 'en'; // or 'ar'
  getMenus() {
    return this.httpClient.get(
      environment.JSON_URL
    +environment.JSON_URL.substring(environment.JSON_URL.lastIndexOf('/') + 1)
    +'.'+
    +this.currentLang+'.json');
  }
  getMenu(menuURL: string) {
    return this.httpClient.get(environment.JSON_URL+menuURL+ '/'+ menuURL+'.'+this.currentLang+'.json');
  }
  getSubMenu(menuURL: string, subMenuURL: string) {
    return this.httpClient.get(environment.JSON_URL+menuURL+ '/'+ subMenuURL + '/'+ subMenuURL+'.'+this.currentLang+'.json');
  }
  getAside(menuURL: string, subMenuURL: string, asideBarURL: string) {
    return this.httpClient.get(environment.JSON_URL+menuURL+ '/'+ subMenuURL + '/'+ asideBarURL+ '/'+ asideBarURL+'.'+this.currentLang+'.json');
  }
  getSubAside(menuURL: string, subMenuURL: string, asideBarURL: string, subAsideBarURL: string) {
    return this.httpClient.get(environment.JSON_URL+menuURL+ '/'+ subMenuURL+'/'+ asideBarURL+'/'+ subAsideBarURL + '/'+ subAsideBarURL+'.'+this.currentLang+'.json');
  }
}

