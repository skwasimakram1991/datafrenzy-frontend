import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMatchChoiceComponent } from './job-match-choice.component';

describe('JobMatchChoiceComponent', () => {
  let component: JobMatchChoiceComponent;
  let fixture: ComponentFixture<JobMatchChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobMatchChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobMatchChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
