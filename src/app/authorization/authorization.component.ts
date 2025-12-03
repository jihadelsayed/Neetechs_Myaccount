import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RuntimeConfigService } from './services/runtime-config.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';

@Component({
  standalone: true,
  imports: [CommonModule, LoginPromptComponent],
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
frameSrc: SafeResourceUrl = '';
  isBrowser = false;
  showLoginModal = false;
  constructor(
    private config: RuntimeConfigService,
    @Inject(PLATFORM_ID) private platformId: Object,
  private sanitizer: DomSanitizer
  ) {}

 ngOnInit() {
  if (!isPlatformBrowser(this.platformId)) return;

  this.isBrowser = true;

  const lang = window.navigator.language.substring(0, 2);
  // Pass only the origin (scheme + hostname) and pathname to the accounts
  // portal.  We avoid using the full href because hash routing is not in
  // use for our Angular apps.
  const host = window.location.origin;
  const pathname = window.location.pathname;

  const unsafeUrl = `${this.config.loginUrl}getCredential?host=${host}&language=${lang}&pathname=${pathname}`;
  this.frameSrc = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);

  // Attach the iframe src safely
  const iframe = document.getElementById('iframeAccount') as HTMLIFrameElement;
  if (iframe) iframe.src = this.frameSrc as string;

  // ✅ Unified listener for login_required, credential, or logout
  const messageHandler = (event: MessageEvent) => {
    if (event.origin !== `https://accounts.${this.config.mainDomain}`) return;

    // Handle credential response
    if (event.data?.type === 'credential' && event.data.getToken) {
      localStorage.setItem('userToken', event.data.getToken);
      localStorage.setItem('UserInfo', event.data.getUserInfo);
      if (event.data.darkMode !== undefined) {
        localStorage.setItem('darkMode', event.data.darkMode);
      }
      window.removeEventListener('message', messageHandler);
      window.location.reload();
      return;
    }

    // Prompt login
    if (event.data?.type === 'login_required') {
      this.showLoginModal = true;
      return;
    }

    // Handle logout event: remove credentials and reload
    if (event.data?.type === 'logout') {
      try {
        localStorage.removeItem('userToken');
        localStorage.removeItem('UserInfo');
      } catch {
        /* ignore */
      }
      window.location.reload();
      return;
    }
  };

  window.addEventListener('message', messageHandler, false);
}


handleLoginPromptConfirm() {
  // Build a signIn URL using runtime config.  Host and pathname tell
  // the accounts portal where to return after login.  We avoid hash
  // routing here.  Language is included but not part of the path.
  const host = window.location.hostname;
  const pathname = window.location.pathname;
  const lang = this.config.language || 'en';
  const loginBase = this.config.loginUrl.replace(/\/$/, '');
  const redirect = `${loginBase}/signIn?host=${host}&pathname=${encodeURIComponent(
    pathname
  )}&language=${lang}`;
  window.location.href = redirect;
}

handleLoginPromptCancel() {
  this.showLoginModal = false;
}

}
