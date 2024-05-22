import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateComponent } from './resume-template.component';

describe('ResumeTemplateComponent', () => {
  let component: ResumeTemplateComponent;
  let fixture: ComponentFixture<ResumeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
