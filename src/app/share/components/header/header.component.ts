import { NgStyle } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public hideHeader: Boolean = false;
  public path: Array<any> = ['/login', '/register', '/new-password', '/reset-password'];
  public currentUrl: String = '';
  public responsiveNavbar: Boolean = false;
  public headerContent: String = '';
  public hideSearchbar: Boolean = false;

  constructor( private router: Router, private renderer: Renderer2) {
  }

  ngOnInit() {
        this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;
        // console.log("Current URL Path:", this.currentUrl);
        this.hideHeader = this.path.includes(this.currentUrl);
        this.updateContent(this.currentUrl)
      }
    });
  }

  toggleNavbar() {
    if (this.responsiveNavbar) {
      this.renderer.removeClass(document.body, 'is-active');
    } else {
      this.renderer.addClass(document.body, 'is-active');
    }
    this.responsiveNavbar = !this.responsiveNavbar
  }

  updateContent(currentUrl: any) {    
    switch(currentUrl) {
      case '/job-match-choice': 
        this.headerContent = 'Edit Rapid Match Profile';
        this.hideSearchbar = false;
        break;
      case '/resume-boost':
        this.headerContent = 'Use AI & ChatGPT to Improve Your Resume';
        this.hideSearchbar = false;
        break;
      case '/interview':
        this.headerContent = 'My Interviews';
        this.hideSearchbar = false;
        break;
      case '/job-details':
        this.headerContent = 'View Job Details';
        this.hideSearchbar = false;
        break;
      case '/resume-templates':
        this.headerContent = 'Choose Resume Template';
        this.hideSearchbar = true;
        break;
      case '/resume-builder':
        this.headerContent = 'AI & ChatGPT Resume Boost';
        this.hideSearchbar = true;
        break;
      case '/jobs':
        this.headerContent = 'Job Search';
        this.hideSearchbar = true;
        break;
      default :
        this.headerContent = 'Edit Contact Information';
        this.hideSearchbar = false;
    }
  }
}
