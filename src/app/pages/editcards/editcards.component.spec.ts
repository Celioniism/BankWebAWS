import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcardsComponent } from './editcards.component';

describe('EditcardsComponent', () => {
  let component: EditcardsComponent;
  let fixture: ComponentFixture<EditcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
