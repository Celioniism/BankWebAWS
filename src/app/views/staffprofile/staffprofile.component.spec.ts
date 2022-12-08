import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffprofileComponent } from './staffprofile.component';

describe('StaffprofileComponent', () => {
  let component: StaffprofileComponent;
  let fixture: ComponentFixture<StaffprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
