import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpinnerService } from "../spinner/spinner.service";
import { UserProfileStoreService } from "./store/user-profile-store.service";
import { UserInterface } from "../shared/interfaces/user-profile.model";
import { AboutComponent } from "./about/about.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { ExperienceComponent } from "./experience/experience.component";
import { StudyComponent } from "./study/study.component";
import { CompetenciesComponent } from "./competencies/competencies.component";
import { InterestsComponent } from "./interests/interests.component";
import { ProfileHeaderComponent } from "./profile-header/profile-header.component";

@Component({
  standalone: true,
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  imports: [CommonModule, AboutComponent, PersonalInfoComponent, ExperienceComponent, StudyComponent, CompetenciesComponent, InterestsComponent, ProfileHeaderComponent]
})
export class UserProfileComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private store = inject(UserProfileStoreService);
  private spinner = inject(SpinnerService);

  profile$ = this.store.profile$;

  ngOnInit(): void {
    const username = this.route.snapshot.params['username'];
    this.spinner.requestStarted();
    this.store.fetchProfile(username).subscribe(() => this.spinner.requestEnded());
  }
}
