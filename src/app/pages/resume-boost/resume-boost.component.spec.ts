import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBoostComponent } from './resume-boost.component';

describe('ResumeBoostComponent', () => {
  let component: ResumeBoostComponent;
  let fixture: ComponentFixture<ResumeBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeBoostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
