import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalInfoComponent } from './edit-personal-info.component';

describe('EditPersonalInfoComponent', () => {
  let component: EditPersonalInfoComponent;
  let fixture: ComponentFixture<EditPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPersonalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
