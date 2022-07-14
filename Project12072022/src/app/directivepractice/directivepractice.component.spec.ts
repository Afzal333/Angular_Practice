import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivepracticeComponent } from './directivepractice.component';

describe('DirectivepracticeComponent', () => {
  let component: DirectivepracticeComponent;
  let fixture: ComponentFixture<DirectivepracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivepracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivepracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
