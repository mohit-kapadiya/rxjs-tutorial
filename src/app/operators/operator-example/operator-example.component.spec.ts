import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorExampleComponent } from './operator-example.component';

describe('OperatorExampleComponent', () => {
  let component: OperatorExampleComponent;
  let fixture: ComponentFixture<OperatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
