import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathemeticalComponent } from './mathemetical.component';

describe('MathemeticalComponent', () => {
  let component: MathemeticalComponent;
  let fixture: ComponentFixture<MathemeticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathemeticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathemeticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
