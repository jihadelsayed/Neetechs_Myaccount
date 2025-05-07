import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { environment } from "../../../environments/environment.prod";
import { UserInterface } from "../../shared/interfaces/user-profile.model";

@Injectable({ providedIn: 'root' })
export class UserProfileStoreService {
  private profileSubject = new BehaviorSubject<UserInterface | null>(null);
  readonly profile$ = this.profileSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchProfile(username: string): Observable<UserInterface> {
    const cache = sessionStorage.getItem(`${username}UserInfo`);
    if (cache) {
      const cached = JSON.parse(cache);
      this.profileSubject.next(cached);
      return of(cached);
    }

    return this.http.get<UserInterface>(`${environment.SERVER_URL}api/allprofileinfo/${username}`).pipe(
      tap(profile => {
        sessionStorage.setItem(`${username}UserInfo`, JSON.stringify(profile));
        this.profileSubject.next(profile);
      })
    );
  }

  get currentProfile(): UserInterface | null {
    return this.profileSubject.value;
  }
}
