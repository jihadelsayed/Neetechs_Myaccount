import { Injectable } from '@angular/core';
import { RuntimeConfigService } from '../authorization/services/runtime-config.service';

/**
 * LogoutService centralizes logout behaviour for the myaccount portal.  It
 * clears authentication tokens and user info from localStorage, expires
 * cookies on the root domain, and redirects to the accounts signOut
 * endpoint.  The accounts endpoint will send a logout message back via
 * postMessage and then return the user to the original host.
 */
@Injectable({ providedIn: 'root' })
export class LogoutService {
  constructor(private runtimeConfig: RuntimeConfigService) {}

  logout(): void {
    // Remove only the canonical auth keys.  Leave darkMode untouched.
    try {
      localStorage.removeItem('userToken');
      localStorage.removeItem('UserInfo');
    } catch {
      /* ignore */
    }
    // Clear legacy keys
    ['token', 'accessToken', 'apiKey', 'roles', 'userInfo'].forEach((k) => {
      try {
        localStorage.removeItem(k);
      } catch {
        /* ignore */
      }
    });
    // Expire cookies across the root domain
    document.cookie =
      'userToken=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie =
      'UserInfo=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

    // Build signOut URL.  Use the runtime config to determine accounts
    // base URL.  Append the current host and pathname so the accounts
    // portal can redirect back to this page after clearing cookies.
    const host = window.location.hostname;
    const pathname = window.location.pathname;
    const lang = this.runtimeConfig.language || 'en';
    const logoutBase = this.runtimeConfig.loginUrl.replace(/\/$/, '');
    const signOutUrl = `${logoutBase}/signOut?host=${host}&pathname=${encodeURIComponent(
      pathname
    )}&language=${lang}`;
    window.location.href = signOutUrl;
  }
}