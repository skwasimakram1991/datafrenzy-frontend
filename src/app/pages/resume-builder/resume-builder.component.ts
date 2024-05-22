import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-builder',
  standalone: true,
  imports: [],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.css'
})
export class ResumeBuilderComponent {
  public currentYearMonth: string = '';

  ngOnInit(): void {
    this.currentYearMonth = this.getCurrentYearMonth();
  }

  getCurrentYearMonth(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');    
    return `${year}-${month}`;
  }
}
