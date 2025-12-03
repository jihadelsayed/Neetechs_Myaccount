import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleModeService {
  mode: string | null = null;
  darkMode: string | null = null;

  constructor(@Inject(LOCALE_ID) public localeId: string) {
    if (typeof window !== 'undefined') {
      this.mode = localStorage.getItem('mode');
      this.darkMode = localStorage.getItem('darkMode');
    }
  }

  setDarkMode(mode: boolean) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', mode.toString());
      localStorage.setItem('mode', mode ? 'dark' : 'light');
      window.location.reload();
    }
  }
}
